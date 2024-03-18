import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { classNames } from "~/utilities/classNames";

const PageLayout = () => {
  const { pathname } = useLocation();

  const comp = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     if (count === 100) {
  //       clearInterval(timerId);
  //       return;
  //     }
  //     if (count > 100) {
  //       setCount(100);
  //       clearInterval(timerId);
  //       return;
  //     }
  //     setCount((prevCount) => prevCount + 2);
  //   }, 70); // Adjust this value to control the speed (milliseconds)

  //   return () => clearInterval(timerId);
  // }, [count]);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline();
  //     tl.to(".counter", {
  //       delay: 4.5,
  //       opacity: 0,
  //       duration: 0.35,
  //     })
  //       .to(".bar", {
  //         // delay: 4.5,
  //         height: 0,
  //         stagger: {
  //           amount: 0.5,
  //         },
  //         ease: "power4.inout",
  //         duration: 0.7,
  //       })
  //       .fromTo(
  //         ".heading",
  //         {
  //           y: "-=30",
  //           opacity: 0,
  //           // duration: 1,
  //         },
  //         {
  //           y: "0",
  //           opacity: 1,
  //           ease: "back.inOut",
  //           // duration: 1,
  //         }
  //       )
  //       .from([".text1", ".text2", ".text3", ".text4", ".text5", "#works"], {
  //         y: "+=50",
  //         opacity: 0,
  //         stagger: {
  //           amount: 0.7,
  //         },
  //         ease: "back.inOut",
  //         duration: 1,
  //       })
  //       .to(".loader", {
  //         xPercent: "-100",
  //         ease: "power4.inOut",
  //         // duration: 1.9,
  //         // delay: 7,
  //       });
  //   }, comp);

  //   // setAnimationDone(true)

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={comp} className="scrollbar-hide">
      <div className={classNames("page relative z-20")}>
        <Header />
        <main className="w-full h-full">
          <Outlet />
        </main>

        <Footer />
      </div>

      {/* <div className={classNames("loader")}>
        <h1 className="counter">{count}%</h1>

        <div className={classNames("overlay")}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div> */}
    </div>
  );
};

export default PageLayout;
