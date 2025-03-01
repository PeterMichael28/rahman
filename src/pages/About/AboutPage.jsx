import dp from "~/assets/images/about-me.png";
import Button from "~/components/Button/Button";
import WhatPeopleSay from "~/components/About/WhatPeopleSay";
import ExperienceSection from "~/components/About/ExperienceSection";
import AboutTab from "~/components/About/AboutTab";

const AboutPage = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-1 lg:pt-10 lg:px-4 relative ">
      {/* layout */}
      <div className="grid grid-cols-12 place-items-start lg:gap-x-12 w-full relative">
        {/* tabs */}

        <div className="lg:col-span-3 hidden lg:block w-full sticky top-20 self-start">
          <AboutTab />
        </div>

        {/* contents */}
        <div className="col-span-12 lg:col-span-9 overflow-y-auto h-full">
          {/* about */}
          <div id="about" className="pt-16 lg:pt-20">
            <section>
              {/* image */}
              <div data-aos="fade-right">
                <img src={dp} alt="image" className="size-[96px] lg:size-[160px] rounded-full object-contain" />
              </div>

              {/* header */}
              <div>
                <h1
                  className="text-primary-text text-[25px] lg:text-[50px] font-bold mt-5 leading-normal"
                  data-aos="fade-up"
                >
                  Hi I’m{" "}
                  <span className=" relative max-lg:flex overflow-hidden max-w-fit justify-start items-start">
                    <span className="relative z-10 mr-1 text-[#F37F14]">Abdur Rahman Kole-Ibrahim </span>
                    <span className="absolute bottom-[6px] left-0 w-full -z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="665" height="19" viewBox="0 0 665 19" fill="none">
                        <path d="M12.6582 2.67841L665 0V15.7357L0 19L12.6582 2.67841Z" fill="#FDEFE2" />
                      </svg>
                    </span>
                    <span className="bg-white relative z-10">{""}.</span>
                  </span>
                </h1>

                {/* details */}
                <div className="mt-4 lg:mt-6 space-y-5 lg:space-y-6 text-[#5A5566] " data-aos="fade-up">
                  <p className="text-sm lg:text-lg leading-[150%]">
                    I am an experienced Mobile Engineer a 4-year track record in crafting mobile applications across
                    diverse sectors such as agrictech, fintech, e-commerce, real estate, and logistics.
                  </p>
                  <p className="font-times text-sm lg:text-lg lg:text-[32px] leading-[130%]">
                    “I prioritize integrity, professionalism, and continuous improvement in everything I do.”
                  </p>
                  <p className="text-sm lg:text-lg leading-[150%]">
                    Functionality is important to me with every product I build. I understand the role it plays in user
                    satisfaction and I employ my skills in team leadership, project management, front-end development to
                    ensure I deliver the best, consistently.
                  </p>
                  <p className="text-sm lg:text-lg leading-[150%]">
                    I am always learning how to be better and do better.
                  </p>
                </div>

                {/* button */}
                <div className="w-full flex mt-8 " data-aos="fade-up">
                  {/* btn */}
                  <Button
                    icon={
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.05874 4.22602C6.81465 4.4701 6.81465 4.86583 7.05874 5.10991L12.4501 10.5013L7.05874 15.8927C6.81465 16.1368 6.81465 16.5325 7.05874 16.7765C7.30282 17.0206 7.69849 17.0206 7.94257 16.7765L13.7759 10.9432C14.02 10.6991 14.02 10.3035 13.7759 10.0594L7.94257 4.22602C7.69849 3.98195 7.30282 3.98195 7.05874 4.22602Z"
                          fill="white"
                        />
                      </svg>
                    }
                  >
                    <a href="/ABDULRAHMANRESUME.pdf" download="ABDULRAHMANRESUME.pdf">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {/* divider */}
          <div className="w-full bg-[#f7f6f9] h-[2px] max-md:my-8 lg:mt-16" />

          {/* experience */}
          <div id="experience" className="lg:pt-16">
            <ExperienceSection />
          </div>

          {/* what sets me apart */}
          <div id="whatsetsmeapart" className=" pt-7 lg:pt-16">
            <WhatPeopleSay />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
