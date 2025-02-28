import heroBg from "~/assets/images/hero-bg.png";
import star from "~/assets/images/black-star.png";
import newBg from "~/assets/HomeBg.webp";
import newBgSm from "~/assets/HomeBgSm.webp";
import Button from "../Button/Button";

const HeroSection = () => {
  const chipsContent = ["Mobile Engineer", "Q&A", "Project Management"];
  return (
    <section className="w-full flex items-center lg:min-h-screen bg-[#FCFAFF]  border-[#F6F0FF] border-b-[1px] pb-16 shadow-md shadow-black/25 overflow-hidden ">
      {/* bg image */}
      <img src={newBg} alt="bg-image" className="absolute inset-0 w-full h-full z-0 md:block hidden" />
      <img src={newBgSm} alt="bg-image" className="absolute inset-0 w-full h-full z-0 md:hidden" />
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-10 lg:px-4 relative mt-[72px] lg:mt-[76px] z-10">
        {/* star */}
        <img
          src={star}
          alt="star"
          className="absolute object-contain max-lg:right-12 max-lg:top-6 lg:bottom-40 lg:left-10 size-6 lg:size-9"
        />

        {/* spiral image */}
        <div className="absolute lg:-bottom-4 lg:right-36 right-16 -bottom-20 lg:size-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="90"
            viewBox="0 0 128 90"
            fill="none"
            className="lg:w-[93px] w-[50px]"
          >
            <path
              d="M125.688 29.6656C93.2891 65.648 77.3093 33.3157 75.9495 22.2517C75.1736 15.9391 76.1387 13.4599 76.5837 11.789C80.166 -1.66191 93.6624 2.05619 98.3445 10.3303C122.793 53.5362 64.6265 65.9046 41.0322 46.6216C34.6611 41.0942 29.9255 29.9813 46.0166 24.1338C71.9398 14.7133 85.305 66.0268 25.1167 72.436C9.75737 74.0716 0.758136 58.3052 4.19252 48.6259C8.94614 35.2287 24.9514 34.0281 26.4595 52.725C28.4973 77.9884 15.4746 87.4084 2.94426 87.3689"
              stroke="#3C8369"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* header text */}

        <h1 className="uppercase flex text-left flex-col lg:text-center font-black text-primary-text text-[44px] md:text-[80px] lg:text-[110px] tracking-[-0.248px] leading-[116%] px-2">
          <span data-aos="fade-up">Mobile App</span>
          <span data-aos="fade-up">Developer</span>
        </h1>

        <p
          className="max-w-[610px] px-2 lg:mx-auto text-tertiary mt-4 text-left max-sm:text-sm lg:text-center leading-[150%] tracking-[0.04px] "
          data-aos="fade-up"
        >
          A dedicated and experienced mobile engineer focused on building functional products embedded with top-notch
          user experience to ensure positive company impact and success.
        </p>

        <div
          className="flex justify-between md:justify-start lg:justify-center items-center md:gap-4 mt-6 "
          data-aos="fade-up"
        >
          {chipsContent.map((chip, i) => (
            <div
              key={i}
              className="border border-[#F6F0FF] bg-[#F9F5FF]  lg:px-5 px-4 h-[36px] md:h-10 flex justify-center items-center rounded-full lg:text-sm text-xs text-primary-text"
            >
              {chip}
            </div>
          ))}
        </div>

        <div className="w-full  lg:justify-center flex mt-10 lg:mt-12 " data-aos="fade-up">
          {/* btn */}
          <Button
            icon={
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.05874 4.22602C6.81465 4.4701 6.81465 4.86583 7.05874 5.10991L12.4501 10.5013L7.05874 15.8927C6.81465 16.1368 6.81465 16.5325 7.05874 16.7765C7.30282 17.0206 7.69849 17.0206 7.94257 16.7765L13.7759 10.9432C14.02 10.6991 14.02 10.3035 13.7759 10.0594L7.94257 4.22602C7.69849 3.98195 7.30282 3.98195 7.05874 4.22602Z"
                  fill="white"
                />
              </svg>
            }
            className={"max-md:w-full"}
            cns={
              "w-full pl-[18px] pr-[14px] lg:pl-[18px] lg:pr-[14px] h-12 lg:h-12 lg:text-[14px] gap-4 lg:w-[157px] lg:gap-3  max-md:justify-between"
            }
          >
            <a href="mailto:koleibrahimabdulrahman@gmail.com" className="font-medium  block w-full">
              Contact me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
