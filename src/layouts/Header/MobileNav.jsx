/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { classNames } from "~/utilities/classNames";
import { socials } from "../Footer/Footer";
import React from "react";

const MobileNav = ({ showMobile, setShowMobile, list }) => {
  return (
    <div
      className={`w-full min-h-[100vh] z-50 mobileNav-bg fixed top-[60px] pt-8 px-5 lg:hidden ${showMobile ? "right-0" : "-right-full"} transition-all duration-500`}
    >
      <div className="space-y-[20px] flex flex-col items-start">
        {list.map((li, i) => (
          <React.Fragment key={i}>
            <Link
              to={li.href}
              onClick={() => setShowMobile(false)}
              className={classNames("text-[#6f697E] text-sm ", li.active && "font-bold text-primary")}
            >
              {li.label}
            </Link>

            {/* divider */}
            <div className="h-[1px] w-full bg-[#f7f6f9]" />
          </React.Fragment>
        ))}
        <a
          href="/ABDULRAHMANRESUME.pdf"
          download="ABDULRAHMANRESUME.pdf"
          className={classNames("text-[#6f697E] text-sm ")}
        >
          Resume
        </a>
        <div className="h-[1px] w-full bg-[#f7f6f9]" />
      </div>

      {/* socials */}
      <div className="mt-[30px]">
        <p className="text-[#6f697E] text-sm">Socials</p>
        <div className="flex gap-x-5 items-center mt-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              className="size-9 rounded-full bg-[#f1ecfd] flex justify-center items-center text-primary"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
