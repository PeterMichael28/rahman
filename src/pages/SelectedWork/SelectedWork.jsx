import { Link, useNavigate, useParams } from "react-router-dom";
import { workData } from "~/assets/js/workData";
import Button from "~/components/Button/Button";
import SectionHeader from "~/components/SectionHeader";
import { useMediaQuery } from "~/hooks/useMediaQuery";

const SelectedWork = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("750px");
  const currentWork = workData.find((data) => data.title == id);
  const otherWork = workData.filter((data) => data.title !== id);

  if (!currentWork) {
    navigate("/");
  }

  // console.log(currentWork);

  return (
    <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10 lg:px-4 pt-10 md:pt-10 mt-10 md:mt-14 ">
      {/* back */}
      <div className="flex gap-1.5 items-center underline-offset-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7762 4.22602C14.0203 4.4701 14.0203 4.86583 13.7762 5.10991L8.38486 10.5013L13.7762 15.8927C14.0203 16.1368 14.0203 16.5325 13.7762 16.7765C13.5321 17.0206 13.1365 17.0206 12.8924 16.7765L7.05903 10.9432C6.81496 10.6991 6.81496 10.3035 7.05903 10.0594L12.8924 4.22602C13.1365 3.98195 13.5321 3.98195 13.7762 4.22602Z"
            fill="#7444EE"
          />
        </svg>

        <span className="lg:text-lg text-sm leading-[140%] text-primary font-medium underline">Back</span>
      </div>

      <section className="mt-8">
        {/* banner */}
        <img
          src={isSmallScreen ? currentWork.images[1] : currentWork.images[0]}
          alt="cover-img"
          className="w-full h-[246px] md:h-[446px] lg:h-[600px]"
        />

        <div className="mt-10 md:mt-16">
          <h2 className="text-[32px] lg:text-[56px] text-primary-text font-bold leading-[140%]">{currentWork.title}</h2>

          {/* project overview */}
          <div className=" mt-6 lg:mt-10">
            <h4 className="text-[24px] lg:text-[40px] font-medium text-primary-text" data-aos="fade-up">
              Project Overview
            </h4>

            <p className="mt-5 lg:mt-8 text-sm lg:text-[20px] leading-[150%] flex flex-col items-start gap-y-4 text-[#5A5566]">
              {currentWork.overview.map((text, i) => (
                <span key={i} data-aos="fade-up">
                  {text}
                </span>
              ))}
            </p>

            {/* more details */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 place-items-start lg:place-content-between gap-y-5 mt-6 lg:mt-8"
              data-aos="fade-up"
            >
              {/* role */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text font-medium text-lg lg:text-2xl leading-[120%]">Role</p>
                <span className="text-sm lg:text-base leading-[140%] text-[#5A5566]">{currentWork.role}</span>
              </div>

              {/* Tech */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text text-lg lg:text-2xl leading-[120%] font-medium">Technology</p>
                <div>
                  {currentWork.tech.map((tech, i) => (
                    <span key={i} className="text-sm lg:text-base leading-[140%] block mb-1 text-[#5A5566]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Duration */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text font-medium text-lg lg:text-2xl leading-[120%]">Project Duration</p>
                <span className="text-sm lg:text-base leading-[140%] text-[#5A5566]">{currentWork.duration}</span>
              </div>

              {/* Deliverable */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text text-lg lg:text-2xl font-medium leading-[120%]">Deliverable</p>
                <span className="text-sm lg:text-base leading-[140%] text-[#5A5566]">{currentWork.deliverable}</span>
              </div>
            </div>

            <div className="mt-8" data-aos="fade-up">
              <Button
                icon={
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.13873 14.135C0.870715 14.403 0.870715 14.8376 1.13873 15.1056C1.40675 15.3736 1.8413 15.3736 2.10931 15.1056L1.13873 14.135ZM12.511 2.76276L1.13873 14.135L2.10931 15.1056L13.4816 3.73334L12.511 2.76276Z"
                      fill="white"
                    />
                    <path
                      d="M3.17676 3.15625H13.1218V13.1013"
                      stroke="white"
                      strokeWidth="1.37261"
                      strokeLinecap="round"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                }
                cns={
                  " lg:p-0 lg:h-[58px] lg:text-lg gap-3 lg:w-[188px] lg:gap-[10px]  lg:items-center lg:justify-center"
                }
              >
                <a href={currentWork.liveUrl} target="_blank" rel="noreferrer" className="font-medium  block w-full ">
                  Open Project
                </a>
              </Button>
            </div>
          </div>

          {/* selected Screens */}
          <div className="mt-10 lg:mt-14">
            <SectionHeader text="Selected Screens" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 lg:mt-8 gap-x-[18px] gap-y-6">
              {currentWork.images.map((img, i) => {
                if (i > 1) {
                  return <img key={i} src={img} alt="selected-work" className="h-320px] lg:h-[450px] w-full" />;
                }
              })}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="w-full bg-[#f7f6f9] h-[2px] my-[64px] lg:my-[88px]" />
      </section>

      {/* other projects */}
      <div className="" data-aos="fade-up">
        <h3 className="text-[32px] lg:text-[56px] font-bold leading-[140%]">Other Projects</h3>

        <div className="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-x-6 gap-y-8">
          {otherWork.map((data, i) => (
            <div key={i} className="w-full flex flex-col gap-y-3 lg:gap-y-4">
              <img src={data.images[0]} alt="cover-image" className="w-full h-[190px] md:h-[214px]" />
              <div className="border-onTertiary border rounded-[20px] w-full min-h-[117px] md:min-h-[126px] p-5">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] text-primary-text font-medium leading-normal md:text-[24px]">
                    {data.title}
                  </p>

                  <Link to={`/works/${encodeURIComponent(data.title)}`}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.05874 4.22602C6.81465 4.4701 6.81465 4.86583 7.05874 5.10991L12.4501 10.5013L7.05874 15.8927C6.81465 16.1368 6.81465 16.5325 7.05874 16.7765C7.30282 17.0206 7.69849 17.0206 7.94257 16.7765L13.7759 10.9432C14.02 10.6991 14.02 10.3035 13.7759 10.0594L7.94257 4.22602C7.69849 3.98195 7.30282 3.98195 7.05874 4.22602Z"
                        fill="#1A0E36"
                      />
                    </svg>
                  </Link>
                </div>

                <p className="text-sm text-[#5A5566] leading-[150%] mt-3">{data?.otherProjectText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
