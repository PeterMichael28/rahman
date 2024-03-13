import footerOverlay from "~/assets/images/footer/footer-overlay.png";
import contactOverlay from "~/assets/images/footer/img.png";
import footerOverlay2 from "~/assets/images/footer/footer-overlay2.png";
import contactOverlay2 from "~/assets/images/footer/img2.png";
import { Link } from "react-router-dom";
import icons from "~/assets/js/icons";

export const socials = [
  {
    title: "LinkedIn",
    icon: icons.linkedIn,
    url: "/",
  },
  {
    title: "Twitter",
    icon: icons.twitter,
    url: "",
  },
  {
    title: "Github",
    icon: icons.github,
    url: "",
  },
];

const Footer = () => {
  const navContacts = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <footer className="relative bg-primary-light mt-24 min-h-[390px]">
      {/* bg overlays */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <img src={footerOverlay} alt="overlay" className=" w-full h-full " />
      </div>

      {/* small screen */}
      <div className="absolute inset-0 w-full h-full lg:hidden">
        <img src={footerOverlay2} alt="overlay" className=" w-full h-full" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-5 lg:px-0 pt-10 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-center gap-y-4 relative z-10 w-full">
          <div>
            <p className="text-[#EAE3FC] text-xl lg:text-3xl font-medium leading-[116%] tracking-[-0.36px]">
              Ready to build your product?
            </p>
            <h2 className="text-white text-3xl lg:text-[54px] font-medium tracking-[-0.56px] mt-3 leading-[116%]">
              Lets work together
            </h2>
          </div>

          <button className="py-[14px] px-6 flex items-center justify-center rounded-lg bg-white btn-shadow hover:bg-[#f1edfd] transition-all duration-300 text-primary font-">
            Contact me
          </button>
        </div>

        {/* contact details */}
        <div className="flex flex-col lg:flex-row items-start h-full lg:justify-between w-full max-lg:px-4 p-8 pt-5 lg:pt-10 max-lg:gap-y-8 mt-8 relative ">
          {/* bg overlays */}
          <div className="absolute inset-0 w-full h-full hidden lg:block">
            <img src={contactOverlay} alt="overlay" className="h-full w-full object-contain" />
          </div>

          {/* bg overlays small screen*/}
          <div className="absolute inset-0 w-full h-full lg:hidden">
            <img src={contactOverlay2} alt="overlay" className="h-full w-full " />
          </div>

          <div className="flex flex-col justify-between items-stat w-full relative z-20 h-auto  ">
            <img src="/white-logo.png" alt="logo" className="object-contain size-10" />
            <p className="text-white hidden md:block mt-[72px]">
              ©️ ABDULRAHMAN KOLE-IBRAHIM {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex justify-start lg:justify-end gap-x-[90px] items-start relative z-20 w-full ">
            <nav className="space-y-4">
              <p className="text-[#eae3fc] font-medium ">Quicklinks</p>
              <ul className="space-y-3">
                {navContacts.map((nav) => (
                  <li key={nav.label} className="text-white hover:underline transition-all duration-300">
                    <Link to={nav.href}>{nav.label}</Link>
                  </li>
                ))}
                <li className="text-white hover:underline transition-all duration-300 cursor-pointer">Resume</li>
              </ul>
            </nav>

            <nav className="space-y-4">
              <p className="text-[#eae3fc] font-medium ">Socials</p>
              <ul className="space-y-3">
                {socials.map((social) => (
                  <li key={social.title} className="text-white flex items-center gap-x-1">
                    <span className="text-[20px]">{social.icon}</span>
                    <span>{social.title}</span>
                    <span>{icons.arrowUpRight}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="text-white lg:hidden relative z-20">©️ ABDULRAHMAN KOLE-IBRAHIM 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
