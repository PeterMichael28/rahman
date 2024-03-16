import SectionHeader from "../SectionHeader";

const ExperienceSection = () => {
  const experienceLists = [
    {
      title: "Faramove (Senior Flutter Developer)",
      duration: "Jan 2023 - Till Date",
    },
    {
      title: "Jeetar (Senior Flutter Developer)",
      duration: "Aug 2021 - Dec 2022",
    },
    {
      title: "Freelance (Mobile Engineer)",
      duration: "May 2020 - Aug 2021",
    },
    {
      title: "Infusync Digital Limited (Mobile Engineer)",
      duration: "May 2020 - Aug 2021",
    },
    {
      title: "Chams Plc (Software Engineer)",
      duration: "December 2018- December 2019",
    },
  ];
  return (
    <section id="experience">
      <SectionHeader text="Experience" />

      <div className="space-y-4 mt-6 lg:mt-12">
        {experienceLists.map((experience) => (
          <div
            key={experience.title}
            className="w-full py-4 px-5 lg:py-6 lg:px-8 flex flex-col items-start gap-3 rounded-lg border border-[#f4f3f7] leading-[120%]"
          >
            <span className="text-primary-text  lg:text-2xl font-medium">{experience.title}</span>
            <span className="text-sm lg:text-lg text-[#5A5566]">{experience.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
