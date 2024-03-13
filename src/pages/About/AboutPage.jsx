import dp from "~/assets/images/about-me.png";
import Button from "~/components/Button/Button";
import WhatPeopleSay from "~/components/About/WhatPeopleSay";
import ExperienceSection from "~/components/About/ExperienceSection";
import AboutTab from "~/components/About/AboutTab";

const AboutPage = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-1 lg:pt-10 lg:px-0 relative mt-16 lg:mt-20">
      {/* layout */}
      <div className="grid grid-cols-12 place-items-start lg:gap-x-12 w-full">
        {/* tabs */}

        <AboutTab />

        {/* contents */}
        <div className="col-span-12 lg:col-span-9">
          {/* about */}
          <section id="about">
            {/* image */}
            <div>
              <img src={dp} alt="image" className="size-[96px] lg:size-[160px] rounded-full object-contain" />
            </div>

            {/* header */}
            <div>
              <h1 className="text-primary-text text-[32px] lg:text-[56px] font-bold mt-5 leading-normal">
                Hi I’m{" "}
                <span className=" relative max-lg:flex overflow-hidden max-w-fit justify-start items-start">
                  <span className="relative z-10 mr-1 text-[#F37F14]">Rahman Kole-Ibrahim </span>
                  <span className="absolute bottom-[6px] left-0 w-full -z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="586" height="19" viewBox="0 0 586 19" fill="none">
                      <path d="M12.6582 2.67841L586 0V15.7357L0 19L12.6582 2.67841Z" fill="#FDEFE2" />
                    </svg>
                  </span>
                  <span className="bg-white relative z-10">{""}.</span>
                </span>
              </h1>

              {/* details */}
              <div className="mt-4 lg:mt-6 space-y-5 lg:space-y-6 text-[#5A5566] ">
                <p className="text-sm lg:text-lg leading-[150%]">
                  I am an experienced Mobile Engineer a 4-year track record in crafting mobile applications across
                  diverse sectors such as agrictech, fintech, e-commerce, real estate, and logistics.
                </p>
                <p className="font-times text-sm lg:text-lg lg:text-[32px] leading-[130%]">
                  “I prioritize integrity, professionalism, and continuous improvement in everything I do.”
                </p>
                <p className="lg:text-lg leading-[150%]">
                  Functionality is important to me with every product I build. I understand the role it plays in user
                  satisfaction and I employ my skills in team leadership, project management, front-end development to
                  ensure I deliver the best, consistently.
                </p>
                <p className="lg:text-lg leading-[150%]">I am always learning how to be better and do better.</p>
              </div>

              {/* button */}
              <div className="w-full flex mt-8 ">
                {/* btn */}
                <Button
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 28" fill="none">
                      <rect
                        x="0.625"
                        y="1.50098"
                        width="16.75"
                        height="16.75"
                        rx="3.375"
                        stroke="white"
                        strokeWidth="1.25"
                      />
                      <path
                        d="M9.625 14.624C9.625 14.2788 9.34518 13.999 9 13.999C8.65482 13.999 8.375 14.2788 8.375 14.624L9.625 14.624ZM8.55806 27.566C8.80214 27.81 9.19787 27.81 9.44194 27.566L13.4194 23.5885C13.6635 23.3444 13.6635 22.9487 13.4194 22.7046C13.1753 22.4605 12.7796 22.4605 12.5355 22.7046L9 26.2401L5.46447 22.7046C5.22039 22.4605 4.82466 22.4605 4.58058 22.7046C4.33651 22.9487 4.33651 23.3444 4.58058 23.5885L8.55806 27.566ZM8.375 14.624L8.375 27.124L9.625 27.124L9.625 14.624L8.375 14.624Z"
                        fill="white"
                      />
                    </svg>
                  }
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </section>

          {/* divider */}
          <div className="w-full bg-[#f7f6f9] h-[2px] my-8 lg:my-16" />

          {/* experience */}
          <ExperienceSection />

          {/* what sets me apart */}
          <WhatPeopleSay />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
