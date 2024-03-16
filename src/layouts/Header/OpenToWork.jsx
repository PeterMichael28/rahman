import gsap from "gsap";
import { useEffect, useRef } from "react";
import icons from "~/assets/js/icons";

const OpenToWork = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap.timeline().fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 2,
          transformOrigin: "left top",
          stagger: { each: 0.1 },
        }
      );
      // .fromTo(
      //   ".job-title",
      //   {
      //     y: 20,
      //     opacity: 0,
      //     scale: 1.2,
      //   },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     duration: 1,
      //     scale: 1,
      //     ease: "bounce.out",
      //   }
      // );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="px-4 py-2 flex justify-center items-center gap-1 rounded-[20px] bg-onSecondary text-secondary font-medium text-sm"
      ref={component}
    >
      <span className="text-lg animate-pulse">{icons.dot}</span>
      <span className="space-x-[2px]">
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
