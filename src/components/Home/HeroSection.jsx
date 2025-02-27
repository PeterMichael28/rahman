import heroBg from "~/assets/images/hero-bg.png";
import star from "~/assets/images/black-star.png";
import Button from "../Button/Button";

const HeroSection = () => {
  const chipsContent = ["Mobile Engineer.", "Q&A", "Project Management"];
  return (
    <section className="w-full flex items-center lg:min-h-screen bg-background  border-[#f6f6f9] border-b-[5px] pb-16 shadow-md shadow-black/25 overflow-hidden ">
      {/* bg image */}
      <img src={heroBg} alt="bg-image" className="absolute inset-0 w-full h-full z-0 lg:block hidden" />

      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-10 lg:px-4 relative mt-[72px] lg:mt-14 z-10">
        {/* star */}
        <img
          src={star}
          alt="star"
          className="absolute object-contain max-lg:right-12 max-lg:top-6 lg:bottom-40 lg:left-10 size-6 lg:size-9"
        />

        {/* spiral image */}
        <div className="absolute lg:bottom-10 lg:right-36 right-16 -bottom-12 lg:size-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="90"
            viewBox="0 0 128 90"
            fill="none"
            className="lg:w-[63px] w-[50px]"
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
          className="max-w-2xl px-2 lg:mx-auto text-tertiary mt-4 text-left max-sm:text-sm lg:text-center leading-[150%] tracking-[0.04px] "
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
              className="border border-border bg-onTertiary  lg:px-5 px-4 py-3 rounded-full lg:text-sm text-xs text-primary-text"
            >
              {chip}
            </div>
          ))}
        </div>

        <div className="w-full lg:justify-center flex mt-8 lg:mt-12 " data-aos="fade-up">
          {/* btn */}
          <Button
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                <rect x="0.625" y="0.625" width="14.75" height="14.75" rx="3.375" stroke="white" strokeWidth="1.25" />
                <path
                  d="M9.7478 7.375C9.40262 7.375 9.1228 7.65482 9.1228 8C9.1228 8.34518 9.40262 8.625 9.7478 8.625L9.7478 7.375ZM22.6897 8.44194C22.9338 8.19786 22.9338 7.80213 22.6897 7.55806L18.7123 3.58058C18.4682 3.3365 18.0725 3.3365 17.8284 3.58058C17.5843 3.82466 17.5843 4.22039 17.8284 4.46447L21.3639 8L17.8284 11.5355C17.5843 11.7796 17.5843 12.1753 17.8284 12.4194C18.0725 12.6635 18.4682 12.6635 18.7123 12.4194L22.6897 8.44194ZM9.7478 8.625L22.2478 8.625L22.2478 7.375L9.7478 7.375L9.7478 8.625Z"
                  fill="white"
                />
              </svg>
            }
          >
            <a href="mailto:koleibrahimabdulrahman@gmail.com" className="font-medium">
              Contact me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
