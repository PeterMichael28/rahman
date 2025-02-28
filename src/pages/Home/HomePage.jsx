import HeroSection from "~/components/Home/HeroSection";
import WorkSection from "~/components/Home/SelectedWork/Work";
import NewSkillsSection from "~/components/Home/Skills/NewSkillsSection";
import SkillsSection from "~/components/Home/Skills/SkillsSection";
import TestimonialSection from "~/components/Home/Testimonial/TestimonialSection";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <WorkSection />
      {/* <SkillsSection /> */}
      <NewSkillsSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
