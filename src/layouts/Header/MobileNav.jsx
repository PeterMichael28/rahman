/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { classNames } from "~/utilities/classNames";
import { socials } from "../Footer/Footer";

const MobileNav = ({ showMobile, setShowMobile, list }) => {
  return (
    <div
      className={`w-full h-[100vh] z-50 mobileNav-bg fixed top-[70px] pt-8 px-5 lg:hidden ${showMobile ? "right-0" : "-right-full"} transition-all duration-500`}
    >
      <div className="space-y-[20px] flex flex-col items-start">
        {list.map((li) => (
          <>
            <Link
              to={li.href}
              key={li.label}
              onClick={() => setShowMobile(false)}
              className={classNames("text-[#6f697E] text-sm ", li.active && "font-bold text-primary")}
            >
              {li.label}
            </Link>

            {/* divider */}
            <div className="h-[1px] w-full bg-[#f7f6f9]" />
          </>
        ))}
        <button className={classNames("text-[#6f697E] text-sm ")}>Resume</button>
        <div className="h-[1px] w-full bg-[#f7f6f9]" />
      </div>

      {/* socials */}
      <div className="mt-[30px]">
        <p className="text-[#6f697E] text-sm">Socials</p>
        <div className="flex gap-x-5 items-center mt-4">
          {socials.map((social) => (
            <span
              key={social.title}
              className="size-9 rounded-full bg-[#f1ecfd] flex justify-center items-center text-primary"
            >
              {social.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
