import contactIcon from "~/assets/images/contact-icon.png";
import heroBg from "~/assets/images/hero-bg.png";
import star from "~/assets/images/black-star.png";
import spiral from "~/assets/images/spiral.png";
import Button from "../Button/Button";

const HeroSection = () => {
  const chipsContent = ["Mobile Engineer", "Q&A", "Project Management"];
  return (
    <section className="w-full flex items-center lg:min-h-screen bg-background  border-[#f6f6f9] border-b-[5px] pb-16 shadow-md shadow-black/25 overflow-hidden ">
      {/* bg image */}
      <img src={heroBg} alt="bg-image" className="absolute inset-0 w-full h-full z-0" />

      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-16 lg:pt-10 lg:px-0 relative mt-20 z-10">
        {/* star */}
        <img
          src={star}
          alt="star"
          className="absolute object-contain max-lg:right-12 max-lg:top-6 lg:bottom-40 lg:left-10 size-8 lg:size-9"
        />

        {/* spiral image */}
        <img
          src={spiral}
          alt="spiral-img"
          className="absolute object-contain lg:bottom-10 lg:right-36 right-16 -bottom-12 size-16 lg:size-20"
        />

        {/* header text */}

        <h1 className="uppercase flex text-left flex-col lg:text-center font-black text-primary-text text-[41px] md:text-[80px] lg:text-[110px] tracking-tight leading-[110%] px-2">
          <span>Mobile App</span>
          <span>Developer</span>
        </h1>

        <p className="max-w-2xl px-2 mx-auto text-tertiary my-4 text-left max-sm:text-sm lg:text-center">
          A dedicated and experienced mobile engineer focused on building functional products embedded with top-notch
          user experience to ensure positive company impact and success.
        </p>

        <div className="flex justify-between lg:justify-center items-center gap-4 mt-7">
          {chipsContent.map((chip, i) => (
            <div
              key={i}
              className="border border-border bg-onTertiary px-4 md:px-5 py-3 rounded-full md:text-sm text-xs text-primary-text"
            >
              {chip}
            </div>
          ))}
        </div>

        <div className="w-full lg:justify-center flex mt-12 ">
          {/* btn */}
          <Button icon={<img src={contactIcon} alt="contact-icon" className="object-contain" />}>Contact me</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
