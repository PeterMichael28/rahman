import skillsBgLarge from "~/assets/images/skills/bgSkills-lg.png";
import skillsBgSmall from "~/assets/images/skills/bgSkills-sm.png";
import SkillsListsLarge from "~/assets/images/skills/SkillsLists-lg.png";
import SkillsListsSm from "~/assets/images/skills/skills-sm.png";

import star1 from "~/assets/images/skills/skillsStar1.png";
import star2 from "~/assets/images/skills/skillsStar2.png";
import silverStar from "~/assets/images/skills/skillsStar-silver.png";

const SkillsSection = () => {
  return (
    <section className="bg-white mt-12 md:mt-24">
      {/* big screen */}
      <div className="max-w-[1200px] w-full mx-auto px-0 relative hidden md:block">
        <img src={skillsBgLarge} alt="" className="w-full" />
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
          <img src={SkillsListsLarge} alt="image" />
        </div>
      </div>

      {/* small screen */}
      <div className="w-full px-5 pb-4 relative h-fit md:hidden border">
        <img src={skillsBgSmall} alt="" className="w-full max-h-[469px]" />

        <div className="absolute inset-0 w-full h-full flex flex-col justify-center px-12 gap-y-6 pt-10 pb-14">
          {/* star1 */}
          <img src={star1} alt="star" className="absolute object-contain top-[6.5rem] left-8 size-32 opacity-35" />

          {/* star2 */}
          <img src={star2} alt="star" className="absolute object-contain top-[41px] left-14 opacity-45 size-14 " />

          {/* silver star */}
          <img src={silverStar} alt="star" className="absolute object-contain top-[45px] left-36 size-14 opacity-55" />

          {/* skill text */}
          <div className="relative z-20">
            <h3 className="text-[28px] font-medium leading-[120%] text-white flex justify-start  flex-col  text-left mt-10">
              <span>Some of my</span>
              <span className="text-stroke ">Technical Skills</span>
            </h3>
          </div>

          {/* skills collection */}
          <img src={SkillsListsSm} alt="image" className="" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
