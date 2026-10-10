import { useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
// React Bits SpecularButton shader supplied by the user; one shared canvas preserves native controls and avoids per-button WebGL contexts.
const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Dark base stroke hugging the edge for a sense of thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both
  // catch a streak. The angular window (size + fade) is measured with an
  // elliptical normal so it varies continuously along straight edges.
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;


export default function SpecularEffects() {
  useEffect(() => {
    let renderer;
    try { renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr: Math.min(devicePixelRatio || 1, 2) }); } catch { return; }
    if (!renderer.isWebgl2) return;
    const gl = renderer.gl, canvas = gl.canvas;
    canvas.className = 'specular-effects';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    const uniforms = {
      uCenter: {value:[0,0]}, uHalfSize: {value:[1,1]}, uRadius:{value:0}, uAngle:{value:2.4}, uPx:{value:renderer.dpr},
      uLineColor:{value:[1,.96,.85]}, uBaseColor:{value:[.32,.32,.32]}, uIntensity:{value:0},
      uShineSize:{value:10*Math.PI/180}, uShineFade:{value:40*Math.PI/180}, uThickness:{value:renderer.dpr}, uBaseWidth:{value:0}
    };
    const mesh = new Mesh(gl,{geometry:new Triangle(gl),program:new Program(gl,{vertex:VERT,fragment:FRAG,uniforms,depthTest:false,depthWrite:false,transparent:true})});
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let raf=0, last=0, pointer=null, active=true;
    const states=new Map();
    const resize=()=>{renderer.setSize(innerWidth,innerHeight);wake();};
    const render=now=>{
      raf=0;
      if(!active || document.hidden) return;
      const dt=Math.min((now-last)/1000 || .016,.05);last=now;
      const modal=document.querySelector('dialog[open]');
      const host=modal || document.body;
      if(canvas.parentNode!==host) host.appendChild(canvas);
      gl.disable(gl.SCISSOR_TEST);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
      if(motion.matches) return;
      let changing=false;
      const controls=[...host.querySelectorAll('a[href],button')].filter(el=>!el.disabled && !el.closest('.header, .cinema-portals, .cinema-scroll, .experience-heading .text-link, .cinema-video-toggle') && el.getClientRects().length && (modal || !el.closest('dialog')));
      for(const [el] of states) if(!controls.includes(el)) states.delete(el);
      for(const el of controls){
        const r=el.getBoundingClientRect();
        if(!r.width||!r.height||r.bottom<0||r.top>innerHeight||r.right<0||r.left>innerWidth) continue;
        const focus=el.matches(':focus-visible');
        const dx=pointer?Math.max(r.left-pointer.x,0,pointer.x-r.right):9999;
        const dy=pointer?Math.max(r.top-pointer.y,0,pointer.y-r.bottom):9999;
        const distance=Math.hypot(dx,dy), t=Math.max(0,1-distance/180);
        const target=focus?1:t*t*(3-2*t);
        let state=states.get(el)||{angle:2.4,bright:0};
        let angle=state.angle;
        if(pointer){
          const cx=r.left+r.width/2,cy=r.top+r.height/2;
          angle=distance===0?Math.atan2(2/r.height,-2/r.width)+(pointer.x-cx)/(r.width/2)*.3+(cy-pointer.y)/(r.height/2)*.15:Math.atan2(cy-pointer.y,pointer.x-cx);
        }
        const diff=((angle-state.angle+Math.PI*3)%(Math.PI*2))-Math.PI;
        state.angle+=diff*(1-Math.exp(-dt*7));state.bright+=(target-state.bright)*(1-Math.exp(-dt*8));states.set(el,state);
        if(Math.abs(target-state.bright)>.002 || (target>.01 && Math.abs(diff)>.002))changing=true;
        if(state.bright<.003)continue;
        const dpr=renderer.dpr;
        uniforms.uCenter.value=[(r.left+r.width/2)*dpr,(innerHeight-r.top-r.height/2)*dpr];
        uniforms.uHalfSize.value=[r.width/2*dpr,r.height/2*dpr];
        uniforms.uRadius.value=Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius)||0,r.width/2,r.height/2)*dpr;
        uniforms.uAngle.value=state.angle;uniforms.uIntensity.value=state.bright;
        const x=Math.max(0,Math.floor((r.left-5)*dpr)),y=Math.max(0,Math.floor((innerHeight-r.bottom-5)*dpr));
        gl.enable(gl.SCISSOR_TEST);gl.scissor(x,y,Math.max(1,Math.ceil((r.width+10)*dpr)),Math.max(1,Math.ceil((r.height+10)*dpr)));
        renderer.render({scene:mesh,clear:false});
      }
      gl.disable(gl.SCISSOR_TEST);
      if(changing)raf=requestAnimationFrame(render);
    };
    function wake(){if(!raf&&active){last=performance.now();raf=requestAnimationFrame(render);}}
    const move=e=>{pointer={x:e.clientX,y:e.clientY};wake();};
    const leave=()=>{pointer=null;wake();};
    const out=e=>{if(!e.relatedTarget)leave();};
    window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerout',out);window.addEventListener('blur',leave);
    window.addEventListener('resize',resize);document.addEventListener('scroll',wake,true);document.addEventListener('focusin',wake);document.addEventListener('focusout',wake);document.addEventListener('visibilitychange',wake);motion.addEventListener('change',wake);
    const observer=new MutationObserver(wake);observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['open','disabled']});
    resize();
    return ()=>{active=false;cancelAnimationFrame(raf);observer.disconnect();window.removeEventListener('pointermove',move);window.removeEventListener('pointerout',out);window.removeEventListener('blur',leave);window.removeEventListener('resize',resize);document.removeEventListener('scroll',wake,true);document.removeEventListener('focusin',wake);document.removeEventListener('focusout',wake);document.removeEventListener('visibilitychange',wake);motion.removeEventListener('change',wake);canvas.remove();gl.getExtension('WEBGL_lose_context')?.loseContext();};
  },[]);
  return null;
}


