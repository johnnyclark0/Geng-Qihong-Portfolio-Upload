import React, { Children, cloneElement, isValidElement, useEffect, useRef } from 'react';
import './VariableProximity.css';
// React Bits VariableProximity distance/falloff interpolation, adapted for mixed Chinese/English headings and event-driven updates.
export default function VariableProximity({label,radius=150}) {
 const root=useRef(null);
 useEffect(()=>{
  const el=root.current, letters=[...el.querySelectorAll('[data-letter]')], motion=matchMedia('(prefers-reduced-motion: reduce)');
  let pointer=null,raf=0;
  const draw=()=>{raf=0;for(const letter of letters){const r=letter.getBoundingClientRect();const distance=pointer?Math.hypot(pointer.x-r.left-r.width/2,pointer.y-r.top-r.height/2):Infinity;const proximity=motion.matches?0:Math.max(0,1-distance/radius);letter.style.fontVariationSettings=`'wght' ${400+350*proximity}, 'opsz' ${9+31*proximity}`;}};
  const wake=()=>{if(!raf)raf=requestAnimationFrame(draw);};
  const move=e=>{pointer={x:e.clientX,y:e.clientY};wake();};const leave=()=>{pointer=null;wake();};const out=e=>{if(!e.relatedTarget)leave();};
  window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerout',out);window.addEventListener('blur',leave);document.addEventListener('scroll',wake,true);motion.addEventListener('change',wake);
  return()=>{cancelAnimationFrame(raf);window.removeEventListener('pointermove',move);window.removeEventListener('pointerout',out);window.removeEventListener('blur',leave);document.removeEventListener('scroll',wake,true);motion.removeEventListener('change',wake);};
 },[label,radius]);
 return <span ref={root} className="variable-proximity" aria-label={label}>{Array.from(label).map((letter,i)=><span key={i} data-letter aria-hidden="true">{letter}</span>)}</span>;
}
function animate(children){return Children.map(children,child=>typeof child==='string'?<VariableProximity label={child}/>:isValidElement(child)&&child.props.children?cloneElement(child,{},animate(child.props.children)):child);}
export function AnimatedTitle({as:Tag='h2',children,...props}){return <Tag {...props}>{animate(children)}</Tag>;}
