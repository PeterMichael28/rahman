import skillsBgLarge from "~/assets/images/skills/bgSkills-lg.png";
import skillsBgSmall from "~/assets/images/skills/bgSkills-sm.png";
import SkillsListsLarge from "~/assets/images/skills/SkillsLists-lg.png";
import SkillsListsSm from "~/assets/images/skills/skills-sm.png";

import star1 from "~/assets/images/skills/skillsStar1.png";
import star2 from "~/assets/images/skills/skillsStar2.png";
import silverStar from "~/assets/images/skills/skillsStar-silver.png";

const SkillsSection = () => {
  return (
    <section className="bg-white mt-16 md:mt-24">
      {/* big screen */}
      <div className="max-w-[1200px] w-full mx-auto md:px-4 lg:px-4 relative hidden md:block">
        <img src={skillsBgLarge} alt="" className="" />
        <div className="absolute inset-0 w-full h-full flex lg:justify-between flex-col lg:flex-row items-center px-8 lg:px-16">
          {/* star1 */}
          <img src={star1} alt="star" className="absolute object-contain top-[10rem] left-8" />

          {/* star2 */}
          <img src={star2} alt="star" className="absolute object-contain top-14 left-8" />

          {/* silver star */}
          <img src={silverStar} alt="star" className="absolute object-contain top-16 left-32" />

          {/* skill text */}
          <div className="relative z-20">
            <h3 className="text-[40px] font-medium leading-[120%] text-white flex justify-start  flex-col ">
              <span>Some of my</span>
              <span>Technical SKills</span>
            </h3>
          </div>

          {/* skills collection */}
          <img src={SkillsListsLarge} alt="image" className="object-contan max-w-[500px] h-full" />
        </div>
      </div>

      {/* small screen */}
      <div className="px-4 md:hidden">
        <div className="w-full px-3 py-4 relative  h-fit  max-h-[389px]">
          <img src={skillsBgSmall} alt="" className="w-full h-full absolute inset-0" />

          <div className="w-full h-full flex flex-col relative justify-center px-3 gap-y-6 pt-1 pb-14">
            {/* star1 */}
            <img src={star1} alt="star" className="absolute object-contain top-[5.5rem] left-1 size-32 opacity-35" />

            {/* star2 */}
            <img src={star2} alt="star" className="absolute object-contain top-[21px] left-5 opacity-45 size-14 " />

            {/* silver star */}
            <img
              src={silverStar}
              alt="star"
              className="absolute object-contain top-[40px] left-24 size-14 opacity-55"
            />

            {/* skill text */}
            <div className="relative z-20">
              <h3 className="text-[28px] font-medium leading-[120%] text-white flex justify-start  flex-col  text-left mt-2">
                <span>Some of my</span>
                <span className="text-stroke ">Technical Skills</span>
              </h3>
            </div>

            {/* skills collection */}
            <img src={SkillsListsSm} alt="image" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
