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
    url: "https://www.linkedin.com/in/abdul-rahman-kole-ibrahim-0b488715b/",
  },
  {
    title: "Github",
    icon: icons.github,
    url: "https://github.com/ABDULRAHMANBAYO",
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
    <>
      <footer className="relative bg-primary-light mt-24 min-h-[390px]">
        {/* bg overlays */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <img src={footerOverlay} alt="overlay" className=" w-full h-full " />
        </div>

        {/* small screen */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <img src={footerOverlay2} alt="overlay" className=" w-full h-full" />
        </div>

        <div className="max-w-[1200px] w-full mx-auto px-5 md:px-4 pt-10 md:pt-20">
          <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center gap-y-4 relative z-10 w-full">
            <div>
              <p className="text-[#EAE3FC] text-xl md:text-3xl font-normal leading-[126%] tracking-[-0.36px]">
                Ready to build your product?
              </p>
              <h2 className="text-white text-3xl md:text-[54px] font-medium tracking-[-0.56px]  leading-[126%]">
                Lets work together
              </h2>
            </div>

            <button className="px-7 h-12 md:h-14 md:text-[18px] text-sm flex items-center justify-center rounded-lg transition-all duration-300 hover:text-primary text-primary-text font-medium btn-shadow">
              <a href="mailto:koleibrahimabdulrahman@gmail.com">Contact me</a>
            </button>
          </div>

          {/* contact details */}
          <div className="flex flex-col md:flex-row items-start md:justify-between w-full max-md:px-6 p-8 pt-10 md:pt-6  mt-[58px]  relative max-md:h-[340px]">
            {/* contact overlays */}
            <div className="absolute inset-0 w-full h-full hidden md:block">
              <img src={contactOverlay} alt="overlay" className="h-full w-full object-" />
            </div>

            {/* contactOverlay2 small screen*/}
            <div className="absolute inset-0 w-full h-full md:hidden">
              <img src={contactOverlay2} alt="overlay" className="h-full w-full " />
            </div>

            <div className="flex flex-col justify-between items-stat w-full relative z-20 h-auto  md:mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path
                  d="M21.3759 24C18.9704 24 16.6834 21.1298 14.5148 15.3895C14.1139 15.5535 13.713 15.672 13.3121 15.7449C12.9112 15.8178 12.5011 15.8542 12.082 15.8542C11.7722 15.8542 11.4806 15.8269 11.2073 15.7722C10.7699 16.3736 10.2961 16.9658 9.78588 17.549C9.27563 18.1139 8.72893 18.6606 8.14579 19.1891C7.25285 20.0091 6.32346 20.6287 5.35763 21.0478C4.3918 21.4852 3.38041 21.7039 2.32346 21.7039C0.810934 21.7039 0.0364465 21.1025 0 19.8998C0 19.3895 0.164009 18.9339 0.492027 18.533C0.820045 18.1139 1.22096 17.9043 1.69476 17.9043C2.041 17.9043 2.33257 18.0501 2.56948 18.3417C2.76993 18.5604 2.87016 18.8337 2.87016 19.1617C2.87016 20.0547 2.45103 20.5011 1.61276 20.5011C1.1754 20.5011 0.865604 20.328 0.683371 19.9818C0.774487 20.6378 1.30296 20.9658 2.26879 20.9658C2.48747 20.9658 2.68793 20.9385 2.87016 20.8838C5.00228 20.3371 6.92483 18.6606 8.63781 15.8542L9.21184 14.8702C8.20957 14.0319 7.70843 12.9021 7.70843 11.4806C7.70843 10.5877 7.96355 9.8041 8.4738 9.12984C8.98405 8.45558 9.68565 8.11845 10.5786 8.11845C11.2893 8.11845 11.9089 8.38269 12.4374 8.91116L13.5581 6.75171C14.3052 5.27563 15.0251 4.13667 15.7175 3.33485C16.5558 2.33257 17.5125 1.64009 18.5877 1.2574C18.1321 1.18451 17.6583 1.13895 17.1663 1.12073C16.6743 1.08428 16.1458 1.06606 15.5809 1.06606C12.2278 1.06606 9.84966 1.47608 8.44647 2.29613C7.49886 2.86105 6.77904 3.4533 6.28702 4.07289C5.75854 4.74715 5.49431 5.33941 5.49431 5.84966C5.49431 6.48747 5.87699 6.87927 6.64237 7.02506C6.89749 7.07973 7.15262 7.10706 7.40774 7.10706C9.1754 7.10706 10.8155 6.37813 12.328 4.92027C12.4009 4.84738 12.4829 4.82916 12.574 4.8656C12.6469 4.88383 12.6834 4.9385 12.6834 5.02961C12.6834 5.08428 12.6743 5.12073 12.656 5.13895C12.3645 5.50342 12.0091 5.84055 11.59 6.15034C11.1708 6.46014 10.6879 6.7426 10.1412 6.99772C9.04784 7.50797 7.99089 7.7631 6.97039 7.7631C6.16856 7.7631 5.47608 7.58087 4.89294 7.2164C4.20046 6.79727 3.85421 6.21412 3.85421 5.46697C3.85421 4.79271 4.13667 4.13667 4.70159 3.49886C5.55809 2.49658 7.07973 1.74943 9.26651 1.2574C10.1595 1.05695 11.0979 0.902051 12.082 0.792712C13.0843 0.683372 14.1412 0.628702 15.2528 0.628702C16 0.628702 16.6834 0.656037 17.303 0.710707C17.9408 0.747154 18.5148 0.810935 19.0251 0.902052C19.0068 0.902052 19.0159 0.911163 19.0524 0.929386C19.0888 0.929386 19.1526 0.938497 19.2437 0.95672C19.5171 0.883827 19.7722 0.829158 20.0091 0.792712C20.246 0.756265 20.4556 0.738041 20.6378 0.738041C21.4032 0.738041 21.7859 0.929385 21.7859 1.31207C21.7859 1.73121 21.4396 1.94078 20.7472 1.94078C20.5831 1.94078 20.3736 1.90433 20.1185 1.83144C19.8815 1.74032 19.6082 1.59453 19.2984 1.39408C17.9134 1.8861 16.7198 3.5262 15.7175 6.31435C15.3166 7.40775 14.9431 8.38269 14.5968 9.23918C14.2688 10.0774 13.9681 10.8064 13.6948 11.426C13.8952 11.8998 14.1139 12.3918 14.3508 12.9021C14.6059 13.4123 14.8793 13.9499 15.1708 14.5148C15.754 14.1503 16.3371 13.631 16.9203 12.9567C17.5216 12.2825 18.123 11.4442 18.7244 10.4419C19.2528 9.5672 19.7722 8.68337 20.2825 7.79043C20.7927 6.8975 21.3212 6.00456 21.8679 5.11162C22.5057 4.09112 23.1526 3.2164 23.8087 2.48747C24.4647 1.75854 25.1298 1.18451 25.8041 0.765377C26.5877 0.255126 27.5171 0 28.5923 0C29.4123 0 30.0774 0.173121 30.5877 0.519364C31.1344 0.865605 31.4077 1.37586 31.4077 2.05012C31.4077 2.54214 31.2893 2.93394 31.0524 3.22551C30.8337 3.51708 30.5513 3.66287 30.205 3.66287C29.5672 3.66287 29.2483 3.34396 29.2483 2.70615C29.2483 2.03189 29.5672 1.69476 30.205 1.69476C30.6606 1.69476 30.9431 1.89522 31.0524 2.29613C31.0888 1.93166 30.9248 1.62187 30.5604 1.36674C30.3599 1.22096 30.1503 1.12073 29.9317 1.06606C29.7312 0.993167 29.5308 0.95672 29.3303 0.95672C27.7813 0.95672 26.1686 1.959 24.492 3.96355C24.2187 4.29157 23.8633 4.76538 23.426 5.38497C22.9886 6.00456 22.4692 6.76993 21.8679 7.68109C20.6469 9.50342 19.6629 10.8702 18.9157 11.7813C18.3143 12.5103 17.7221 13.139 17.139 13.6674C16.574 14.1959 16 14.6241 15.4169 14.9522C16 15.9909 16.574 16.9385 17.139 17.795C17.7039 18.6333 18.2688 19.3804 18.8337 20.0364C20.2005 21.6401 21.385 22.4419 22.3872 22.4419C23.0979 22.4419 23.6264 22.1139 23.9727 21.4579C24.3007 20.8565 24.4647 20.1276 24.4647 19.2711C24.4647 18.3599 24.328 17.5672 24.0547 16.8929C23.9453 16.6196 23.9544 16.4829 24.082 16.4829C24.1549 16.4829 24.2278 16.5649 24.3007 16.7289C24.8292 17.7494 25.0934 18.779 25.0934 19.8178C25.0934 20.8929 24.7472 21.8497 24.0547 22.6879C23.344 23.5626 22.451 24 21.3759 24ZM9.6492 14.1321C9.99544 13.549 10.369 12.8747 10.7699 12.1093C11.1891 11.344 11.6355 10.4966 12.1093 9.5672C11.7631 9.27563 11.3986 9.12984 11.0159 9.12984C10.3599 9.12984 9.84055 9.43964 9.45786 10.0592C9.12984 10.6059 8.96583 11.2255 8.96583 11.918C8.96583 12.7745 9.19362 13.5125 9.6492 14.1321ZM12.328 15.3349C13.0569 15.3349 13.7312 15.1982 14.3508 14.9248L13.3667 12.082C12.8018 13.2483 12.2005 14.3144 11.5626 15.2802C11.6902 15.2984 11.8178 15.3166 11.9453 15.3349C12.0729 15.3349 12.2005 15.3349 12.328 15.3349Z"
                  fill="white"
                />
              </svg>
              <p className="text-white hidden md:block md:mt-[50px] lg:mt-[82px]">
                &copy; ABDULRAHMAN KOLE-IBRAHIM {new Date().getFullYear()}
              </p>
            </div>

            <div className="flex justify-start md:justify-end gap-x-[90px] items-start mt-7 md:mt-5 relative z-20 w-full ">
              <nav className="space-y-4">
                <p className="text-[#eae3fc] font-medium ">Quicklinks</p>
                <ul className="space-y-3 font-normal">
                  {navContacts.map((nav) => (
                    <li key={nav.label} className="text-white hover:underline transition-all duration-300">
                      <Link to={nav.href}>{nav.label}</Link>
                    </li>
                  ))}
                  <li className="text-white hover:underline transition-all duration-300 cursor-pointer">
                    <a href="/ABDULRAHMANRESUME.pdf" download="ABDULRAHMANRESUME.pdf">
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>

              <nav className="space-y-4">
                <p className="text-[#eae3fc] font-medium ">Socials</p>
                <ul className="space-y-3 font-normal">
                  {socials.map((social) => (
                    <li key={social.title}>
                      <a
                        href={social.url}
                        target="_blank"
                        className="text-white flex items-center gap-x-1"
                        rel="noreferrer"
                      >
                        <span className="text-[20px]">{social.icon}</span>
                        <span>{social.title}</span>
                        <span>{icons.arrowUpRight}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <p className="text-white text-sm md:hidden relative mt-12 z-20">
              &copy; ABDULRAHMAN KOLE-IBRAHIM {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      <div className="w-full py-6 md:py-4 text-sm flex justify-center items-center bg-[#F5F1FE] gap-x-1 gap-y-1">
        <p className="text-[#16063E] leading-5 ms-madi-regular">
          Designed by <span className="">Oluwatimilehin Akapo.</span>
        </p>

        <a
          href="mailto:akapooluwatimilehin@gmail.com"
          className="text-primary font-medium leading-5 underline underline-offset-2"
        >
          Contact me
        </a>
      </div>
    </>
  );
};

export default Footer;
