import { Link, useNavigate, useParams } from "react-router-dom";
import { workData } from "~/assets/js/workData";
import Button from "~/components/Button/Button";
import SectionHeader from "~/components/SectionHeader";

const SelectedWork = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentWork = workData.find((data) => data.title == id);
  const otherWork = workData.filter((data) => data.title !== id);

  if (!currentWork) {
    navigate("/");
  }

  // console.log(currentWork);

  return (
    <div className="max-w-[1200px] w-full mx-auto px-5 lg:px-0 pt-10 lg:pt-10 mt-10 lg:mt-14 ">
      {/* back */}
      <div className="flex gap-2.5 items-center underline-offset-4 cursor-pointer" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="19"
          viewBox="0 0 28 19"
          fill="none"
          className="lg:w-26px] lg:h-[17px] w-[22px] h-[15px]"
        >
          <rect x="10.2183" y="1.125" width="16.75" height="16.75" rx="3.375" stroke="#7444EE" strokeWidth="1.25" />
          <path
            d="M13.5 9.15991C13.8452 9.15991 14.125 9.43973 14.125 9.78491C14.125 10.1301 13.8452 10.4099 13.5 10.4099L13.5 9.15991ZM0.558059 10.2269C0.313981 9.98278 0.313981 9.58705 0.558059 9.34297L4.53553 5.36549C4.77961 5.12142 5.17534 5.12142 5.41942 5.36549C5.6635 5.60957 5.6635 6.0053 5.41942 6.24938L1.88388 9.78491L5.41942 13.3204C5.66349 13.5645 5.66349 13.9603 5.41942 14.2043C5.17534 14.4484 4.77961 14.4484 4.53553 14.2043L0.558059 10.2269ZM13.5 10.4099L1 10.4099L1 9.15991L13.5 9.15991L13.5 10.4099Z"
            fill="#7444EE"
          />
        </svg>
        <span className="lg:text-lg text-sm leading-[140%] text-primary font-medium underline">Back</span>
      </div>

      <section className="mt-8">
        {/* banner */}
        <img src={currentWork.images[0]} alt="cover-img" className="w-full h-[180px] lg:h-[600px]" />

        <div className="mt-10 lg:mt-16">
          <h2 className="text-[32px] lg:text-[56px] text-primary-text font-bold leading-[140%]">{currentWork.title}</h2>

          {/* project overview */}
          <div className=" mt-6 lg:mt-10">
            <h4 className="text-[24px] lg:text-[40px] font-medium text-primary-text">Project Overview</h4>

            <p className="mt-5 lg:mt-8 text-sm lg:text-[20px] leading-[150%] flex flex-col items-start gap-y-4 text-[#5A5566">
              {currentWork.overview.map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </p>

            {/* more details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 place-items-start lg:place-content-between gap-y-5 mt-6 lg:mt-8">
              {/* role */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text font-medium text-lg lg:text-2xl leading-[120%]">Role</p>
                <span className="text-sm lg:text-base leading-[140%]">{currentWork.role}</span>
              </div>

              {/* Tech */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text text-lg lg:text-2xl leading-[120%] font-medium">Technology</p>
                <div>
                  {currentWork.tech.map((tech, i) => (
                    <span key={i} className="text-sm lg:text-base leading-[140%] block mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Duration */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text font-medium text-lg lg:text-2xl leading-[120%]">Project Duration</p>
                <span className="text-sm lg:text-base leading-[140%]">{currentWork.duration}</span>
              </div>

              {/* Deliverable */}
              <div className="flex flex-col items-start gap-y-2">
                <p className="text-primary-text text-lg lg:text-2xl font-medium leading-[120%]">Deliverable</p>
                <span className="text-sm lg:text-base leading-[140%]">{currentWork.deliverable}</span>
              </div>
            </div>

            <div className="mt-4">
              <Button
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M0.535534 10.9077C0.304565 11.1642 0.325276 11.5594 0.581793 11.7904C0.838311 12.0214 1.2335 12.0007 1.46447 11.7441L0.535534 10.9077ZM10.992 0.889189C10.9739 0.544485 10.6798 0.279691 10.3351 0.297756L4.71783 0.592146C4.37312 0.610211 4.10833 0.904295 4.12639 1.249C4.14446 1.5937 4.43854 1.8585 4.78325 1.84043L9.77639 1.57875L10.0381 6.5719C10.0561 6.91661 10.3502 7.1814 10.6949 7.16333C11.0396 7.14527 11.3044 6.85119 11.2864 6.50648L10.992 0.889189ZM1.46447 11.7441L10.8323 1.34011L9.90336 0.503693L0.535534 10.9077L1.46447 11.7441Z"
                      fill="white"
                    />
                  </svg>
                }
              >
                Open Project
              </Button>
            </div>
          </div>

          {/* selected Screens */}
          <div className="mt-10 lg:mt-14">
            <SectionHeader text="Selected Screens" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 lg:mt-8 gap-x-[18px] gap-y-6">
              {currentWork.images.map((img, i) => {
                if (i > 0) {
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
      <div className="">
        <h3 className="text-[32px] lg:text-[56px] font-bold leading-[140%]">Other Projects</h3>

        <div className="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-x-6 gap-y-8">
          {otherWork.map((data, i) => (
            <div key={i} className="w-full flex flex-col gap-y-3 lg:gap-y-4">
              <img src={data.images[0]} alt="cover-image" className="w-full h-[190px] lg:h-[214px]" />
              <div className="border-onTertiary border rounded-[20px] w-full min-h-[117px] lg:min-h-[126px] p-5">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] text-primary-text font-medium leading-normal lg:ext-[24px]">{data.title}</p>

                  <Link to={`/works/${encodeURIComponent(data.title)}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="26"
                      viewBox="0 0 33 26"
                      fill="none"
                      className="lg:w-[32px] w-[26px]"
                    >
                      <circle cx="12.1836" cy="13.1172" r="11.4294" stroke="#1A0E36" strokeWidth="1.52393" />
                      <path
                        d="M16.7578 12.0935C16.337 12.0935 15.9958 12.4346 15.9958 12.8555C15.9958 13.2763 16.337 13.6174 16.7578 13.6174L16.7578 12.0935ZM32.5359 13.3943C32.8334 13.0967 32.8334 12.6142 32.5359 12.3167L27.6868 7.46758C27.3892 7.17001 26.9067 7.17001 26.6092 7.46758C26.3116 7.76514 26.3116 8.24759 26.6092 8.54515L30.9195 12.8555L26.6092 17.1658C26.3116 17.4633 26.3116 17.9458 26.6092 18.2434C26.9067 18.5409 27.3892 18.5409 27.6868 18.2434L32.5359 13.3943ZM16.7578 13.6174L31.9971 13.6174L31.9971 12.0935L16.7578 12.0935L16.7578 13.6174Z"
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
