import gsap from "gsap";
import { useEffect, useRef } from "react";
import icons from "~/assets/js/icons";

const OpenToWork = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...

      const tl = gsap.timeline({
        repeat: -1, // Repeat the animation indefinitely
        repeatDelay: 5, // Delay before the next animation starts
      });
      // tl.fromTo(
      //   ".dot-animation",
      //   { scale: 1 },
      //   {
      //     scale: 1.9,
      //     // opacity: 1,
      //     ease: "bounce.inOut",
      //     duration: 3,
      //   }
      // );
      tl.fromTo(
        ".name-animation",
        { x: -50, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 4,
          transformOrigin: "left top",
          stagger: { each: 0.2 },
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="px-4 py-2 flex justify-center items-center gap-1 rounded-[20px] bg-onSecondary text-secondary font-medium text-sm"
      ref={component}
    >
      <span className="text-lg animate-ping dot-animation">{icons.dot}</span>
      <span className="space-x-1">
        {"Open to work".split(" ").map((letter, index) => (
          <span key={index} className={`name-animation name-animation-${letter}-index inline-block opacity-0 `}>
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
};

export default OpenToWork;
