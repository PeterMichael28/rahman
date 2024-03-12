import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import icons from "~/assets/js/icons";
import { classNames } from "~/utilities/classNames";
import MobileNav from "./MobileNav";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [showMobile, setShowMobile] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Update state when scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLists = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "About",
      href: "/about",
      active: pathname === "/about",
    },
  ];
  return (
    <header
      className={classNames(
        "fixed top-0 bg-transparent w-full px-5 md:px-8 lg:px-0 py-3 z-20 transition-all duration-300",
        isScrolled && "glass"
      )}
    >
      <div className={classNames("max-w-[1200px] w-full mx-auto flex justify-between items-center ")}>
        <div className="flex gap-x-3 items-center">
          {/* logo */}

          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-10 h-8 object-contain" />
          </Link>

          <div className="px-4 py-2 flex justify-center items-center gap-2 rounded-[20px] bg-onSecondary text-secondary font-medium text-sm">
            <span className="text-lg">{icons.dot}</span>
            <span>Open to work</span>
          </div>
        </div>

        {/* desktop navigation */}
        <nav>
          <ul className="w-fit py-1 px-3  justify-center items-center rounded-[20px] bg-tertiaryContainer hidden lg:flex">
            {navLists.map((list, i) => (
              <li key={i}>
                <Link
                  to={list.href}
                  className={classNames(
                    "px-4 py-2 flex justify-center items-center text-tertiary text-sm transition-all duration-300 hover:text-primary",
                    list.active && " bg-white rounded-[20px] font-bold text-primary"
                  )}
                >
                  {list.label}
                </Link>
              </li>
            ))}

            {/* resume button */}
            <button
              type="button"
              className={classNames(
                "px-4 py-2 flex justify-center gap-1 items-center text-tertiary satoshi text-sm transition-all duration-300 hover:text-primary"
              )}
            >
              Resume
              <span>{icons.arrowUpRight}</span>
            </button>
          </ul>
        </nav>

        {/* mobile navigation */}
        <div className="lg:hidden">
          {/* mobile hamburger */}
          {!showMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="text-primary-text cursor-pointer md:hidden relative"
              onClick={() => setShowMobile(true)}
            >
              <path
                d="M20.1777 13.75H16.1377C15.2003 13.75 14.6039 13.5324 14.2397 13.1838C13.8797 12.8393 13.6577 12.2816 13.6577 11.4V4.6C13.6577 3.71977 13.8815 3.16169 14.243 2.81668C14.6089 2.46734 15.2059 2.25 16.1377 2.25H20.1777C21.1151 2.25 21.7115 2.46763 22.0758 2.81624C22.4357 3.1607 22.6577 3.71844 22.6577 4.6V11.4C22.6577 12.2802 22.4339 12.8383 22.0725 13.1833C21.7065 13.5327 21.1095 13.75 20.1777 13.75ZM16.1377 2.75C15.5042 2.75 14.9375 2.8231 14.5679 3.1927C14.1946 3.56604 14.1577 4.10876 14.1577 4.6V11.4C14.1577 11.8912 14.1946 12.434 14.5679 12.8073C14.9375 13.1769 15.5042 13.25 16.1377 13.25H20.1777C20.8112 13.25 21.3779 13.1769 21.7475 12.8073C22.1209 12.434 22.1577 11.8912 22.1577 11.4V4.6C22.1577 4.10876 22.1209 3.56604 21.7475 3.1927C21.3779 2.8231 20.8112 2.75 20.1777 2.75H16.1377Z"
                fill="#5A5566"
                stroke="#5A5566"
              />
              <path
                d="M20.1777 22.75H16.1377C15.2003 22.75 14.6039 22.5324 14.2397 22.1838C13.8797 21.8393 13.6577 21.2816 13.6577 20.4V18.6C13.6577 17.7198 13.8815 17.1617 14.243 16.8167C14.6089 16.4673 15.2059 16.25 16.1377 16.25H20.1777C21.1151 16.25 21.7115 16.4676 22.0758 16.8162C22.4357 17.1607 22.6577 17.7184 22.6577 18.6V20.4C22.6577 21.2802 22.4339 21.8383 22.0725 22.1833C21.7065 22.5327 21.1095 22.75 20.1777 22.75ZM16.1377 16.75C15.5042 16.75 14.9375 16.8231 14.5679 17.1927C14.1946 17.566 14.1577 18.1088 14.1577 18.6V20.4C14.1577 20.8912 14.1946 21.434 14.5679 21.8073C14.9375 22.1769 15.5042 22.25 16.1377 22.25H20.1777C20.8112 22.25 21.3779 22.1769 21.7475 21.8073C22.1209 21.434 22.1577 20.8912 22.1577 20.4V18.6C22.1577 18.1088 22.1209 17.566 21.7475 17.1927C21.3779 16.8231 20.8112 16.75 20.1777 16.75H16.1377Z"
                fill="#5A5566"
                stroke="#5A5566"
              />
              <path
                d="M8.67772 22.75H4.63771C3.70032 22.75 3.10395 22.5324 2.73966 22.1838C2.37971 21.8393 2.15771 21.2816 2.15771 20.4V13.6C2.15771 12.7198 2.38151 12.1617 2.74295 11.8167C3.10892 11.4673 3.70595 11.25 4.63771 11.25H8.67772C9.61512 11.25 10.2115 11.4676 10.5758 11.8162C10.9357 12.1607 11.1577 12.7184 11.1577 13.6V20.4C11.1577 21.2802 10.9339 21.8383 10.5725 22.1833C10.2065 22.5327 9.60948 22.75 8.67772 22.75ZM4.63771 11.75C4.00419 11.75 3.4375 11.8231 3.06791 12.1927C2.69457 12.566 2.65771 13.1088 2.65771 13.6V20.4C2.65771 20.8912 2.69457 21.434 3.06791 21.8073C3.4375 22.1769 4.00419 22.25 4.63771 22.25H8.67772C9.31124 22.25 9.87793 22.1769 10.2475 21.8073C10.6209 21.434 10.6577 20.8912 10.6577 20.4V13.6C10.6577 13.1088 10.6209 12.566 10.2475 12.1927C9.87793 11.8231 9.31124 11.75 8.67772 11.75H4.63771Z"
                fill="#5A5566"
                stroke="#5A5566"
              />
              <path
                d="M8.67772 8.75H4.63771C3.70032 8.75 3.10395 8.53237 2.73966 8.18376C2.37971 7.8393 2.15771 7.28156 2.15771 6.4V4.6C2.15771 3.71977 2.38151 3.16169 2.74295 2.81668C3.10892 2.46734 3.70595 2.25 4.63771 2.25H8.67772C9.61512 2.25 10.2115 2.46763 10.5758 2.81624C10.9357 3.1607 11.1577 3.71844 11.1577 4.6V6.4C11.1577 7.28023 10.9339 7.83831 10.5725 8.18332C10.2065 8.53266 9.60948 8.75 8.67772 8.75ZM4.63771 2.75C4.00419 2.75 3.4375 2.8231 3.06791 3.1927C2.69457 3.56604 2.65771 4.10876 2.65771 4.6V6.4C2.65771 6.89124 2.69457 7.43396 3.06791 7.8073C3.4375 8.1769 4.00419 8.25 4.63771 8.25H8.67772C9.31124 8.25 9.87793 8.1769 10.2475 7.8073C10.6209 7.43396 10.6577 6.89123 10.6577 6.4V4.6C10.6577 4.10876 10.6209 3.56604 10.2475 3.1927C9.87793 2.8231 9.31124 2.75 8.67772 2.75H4.63771Z"
                fill="#5A5566"
                stroke="#5A5566"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              onClick={() => setShowMobile(false)}
              className="text-primary-text cursor-pointer md:hidden relative"
            >
              <g clipPath="url(#clip0_40_2614)">
                <path d="M19.4077 5.5L5.40771 19.5" stroke="#1A0E36" strokeWidth="1.73571" strokeLinecap="round" />
                <path d="M5.40771 5.5L19.4077 19.5" stroke="#1A0E36" strokeWidth="1.73571" strokeLinecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_40_2614">
                  <rect width="24" height="24" fill="white" transform="translate(0.407715 0.5)" />
                </clipPath>
              </defs>
            </svg>
          )}

          <MobileNav showMobile={showMobile} setShowMobile={setShowMobile} list={navLists} />
        </div>
      </div>
    </header>
  );
};

export default Header;
