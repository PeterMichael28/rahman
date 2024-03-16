import React from 'react'

const D = () => {
    const component = useRef(null);

    useEffect(() => {
     let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
       .timeline()
       .fromTo(
        '.name-animation',
        { x: -100, opacity: 0, rotate: -10 },
        {
         x: 0,
         opacity: 1,
         rotate: 0,
         ease: 'elastic.out(1,0.3)',
         duration: 1,
         transformOrigin: 'left top',
         stagger: { each: 0.1, from: 'random' },
        },
       )
       .fromTo(
        '.job-title',
        {
         y: 20,
         opacity: 0,
         scale: 1.2,
        },
        {
         opacity: 1,
         y: 0,
         duration: 1,
         scale: 1,
         ease: 'bounce.out',
        },
       );
     }, component);

        
  return (
    <div>D</div>
  )
}

export default D

export const renderLetters = ( name: KeyTextField, key: string ) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };