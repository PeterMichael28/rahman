import HeroSection from "~/components/Home/HeroSection";
import WorkSection from "~/components/Home/SelectedWork/Work";
import SkillsSection from "~/components/Home/Skills/SkillsSection";
import TestimonialSection from "~/components/Home/Testimonial/TestimonialSection";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <WorkSection />
      <SkillsSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
