import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FadeContent.css';

gsap.registerPlugin(ScrollTrigger);

// Adapted from React Bits FadeContent: preserve semantic layout and reduced motion.
export default function FadeContent({children, as: Tag = 'div', container, blur = true,
 duration = 900, ease = 'power2.out', delay = 0, threshold = 0.1,
 initialOpacity = 0, disappearAfter = 0, disappearDuration = 0.5,
 disappearEase = 'power2.in', onComplete, onDisappearanceComplete,
 className = '', style, ...props}) {
 const ref = useRef(null);
 useLayoutEffect(() => {
  const el = ref.current;
  const seconds = value => value > 10 ? value / 1000 : value;
  let scroller = container || el.closest('dialog') || document.getElementById('snap-main-container') || window;
  if (typeof scroller === 'string') scroller = document.querySelector(scroller) || window;
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
   let disappearance;
   gsap.set(el, {opacity: initialOpacity, filter: blur ? 'blur(10px)' : 'none', willChange: 'opacity, filter'});
   const tl = gsap.timeline({paused: true, delay: seconds(delay), onComplete: () => {
    gsap.set(el, {clearProps: 'filter,willChange'});
    onComplete?.();
    if (disappearAfter > 0) disappearance = gsap.to(el, {opacity: initialOpacity,
     filter: blur ? 'blur(10px)' : 'none', delay: seconds(disappearAfter),
     duration: seconds(disappearDuration), ease: disappearEase, onComplete: onDisappearanceComplete});
   }}).to(el, {opacity: 1, filter: 'blur(0px)', duration: seconds(duration), ease});
   let st;
   const revealFocused = () => {tl.progress(1);disappearance?.kill();gsap.set(el,{opacity:1,clearProps:'filter,willChange'});};
   el.addEventListener('focusin', revealFocused);
   // Dialogs open and scroll to their target after the child layout effects.
   const frame = requestAnimationFrame(() => {
    st = ScrollTrigger.create({trigger: el, scroller, start: `top ${(1-threshold)*100}%`, once: true, onEnter: () => tl.play()});
    st.refresh();ScrollTrigger.update();
   });
   return () => {cancelAnimationFrame(frame);el.removeEventListener('focusin',revealFocused);st?.kill();tl.kill();disappearance?.kill();};
  });
  return () => media.revert();
 }, [container,blur,duration,ease,delay,threshold,initialOpacity,disappearAfter,disappearDuration,disappearEase,onComplete,onDisappearanceComplete]);
 return <Tag ref={ref} className={`fade-content ${className}`} style={style} {...props}>{children}</Tag>;
}
