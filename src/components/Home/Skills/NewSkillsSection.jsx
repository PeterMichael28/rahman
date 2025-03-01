import img2 from "~/assets/Icon.webp";
import MobileSkillsSvg from "./MobileSkillsSvg";
import DesktopSkillsSvg from "./DesktopSkillsSvg";

const NewSkillsSection = () => {
  return (
    <div>
      {/* large screen */}
      <div
        className="bg-[#11052F] w-full rounded-[30px] md:rounded-[40px] mt-[96px] pb-5 hidden md:block 
      h-[557px] relative"
      >
        {/* <img src={skillsBgLarge} alt="" className="absolute inset-0 w-full h-full z-10" /> */}
        <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 lg:px-4  flex justify-between items-center h-full gap-6">
          {/* skill text */}
          <div className="relative z-10 max-w-[500px]">
            <div className="relative z-20">
              <h3 className="text-[40px] font-medium leading-[54px]  flex justify-start  flex-col ">
                <span className="text-white">Some of</span>
                <span className="stroked-text2">My Core Technical Skills</span>
              </h3>
            </div>
          </div>

          {/* skills */}
          <DesktopSkillsSvg />
        </div>
      </div>

      {/* small screen */}
      <div className="w-full h-[654px] bg-[#11052F] rounded-[30px] md:rounded-[40px] mt-[56px] pb-[90px] md:hidden relative">
        <img src={img2} alt="" className="absolute  size-[49px] top-7 right-[39px] z-10" />
        {/* <img src={skillsBgSm} alt="" className="absolute inset-0 w-full h-full z-10" /> */}

        <div className="w-full h-full relative">
          <div className=" w-full  pt-[56px] relative">
            <div className="relative z-20 w-[335px] mx-auto">
              <h3 className="text-[28px] font-medium leading-[32px] text-white flex justify-start  flex-col  text-left mt-2">
                <span>Some of</span>
                <span className="stroked-text2">My Core Technical Skills</span>
              </h3>
            </div>
          </div>

          <MobileSkillsSvg />
        </div>
      </div>
    </div>
  );
};

export default NewSkillsSection;
