import { workData } from "~/assets/js/workData";
// import SingleWorkCard from "./SingleWorkCard";
import SectionHeader from "~/components/SectionHeader";
import { SmoothCorners } from "react-smooth-corners";
import SingleCard from "../SingleCard";

const WorkSection = () => {
  return (
    <section className="bg-white work" id="works">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-16 lg:pt-20 lg:px-4 relative">
        <SectionHeader text="Selected Works" />

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-20 lg:gap-y-32 place-items-center mt-[62px] lg:mt-[82px]">
          {workData.map((data, i) => (
            <SingleWorkCard data={data} key={i} />
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 place-items-center mt-8 lg:mt-[52px]">
          {workData.map((data, i) => (
            <SmoothCorners key={i} corners="15, 25" borderRadius="20px" as="div" className="w-full  h-full">
              <SingleCard data={data?.updatedData} index={i} />
            </SmoothCorners>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
