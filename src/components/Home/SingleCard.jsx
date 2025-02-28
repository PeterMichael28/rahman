import { Link } from "react-router-dom";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { classNames } from "~/utilities/classNames";
import img2 from "~/assets/arrow.webp";

const SingleCard = ({ data, index }) => {
  const isSmallScreen = useMediaQuery("750px");

  return (
    <div
      style={{ background: data.bgColor }}
      data-aos="fade-up"
      data-aos-delay={!isSmallScreen && index * 200}
      className="w-full max-w-[500px] lg:max-w-[580px] mx-auto lg:h-[466px] rounded-[24px] md:rounded-[32px]  relative p-5 md:p-8 group card-con h-fit "
    >
      <Link to={`/works/${encodeURIComponent(data.title)}`} className="w-full h-full">
        <div
          className="w-full rounded-[12px] md:rounded-[20px] h-[166px] md:h-[288px] overflow-hidden p-[15px] md:p-6   relative "
          style={{ background: data.imgBgColor }}
        >
          <img
            src={isSmallScreen ? data?.imgNew2 : data?.imgNew}
            alt="image"
            className="h-full w-full md:rounded-[12px] rounded-[7px] object-cver"
          />

          <div className="min-h-[69px] py-4  absolute -bottom-full group-hover:bottom-0 transition-all duration-500 left-0 w-full rounded-t-[12px] px-5 bg-[#16063E99] backdrop-blur-[12px] hidden md:flex items-center justify-center">
            <div className="w-full flex justify-between items-center gap-3  text-white ">
              <div>
                <h3 className="font-bold text-base leading-none text-white">{data?.title}</h3>
                <p className="text-sm font-medium leading-5 mt-1 text-[#EAE3FC] line-clamp-1 text-ellipsis overflow-hidden md:text-sm w-full px-0">
                  {data?.subText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* lg default */}
        <div className="md:block hidden relative  overflow-hidden">
          <div className="w-full flex md:justify-between flex-col-reverse md:flex-row items-start md:items-center gap-3  text-white mt-[14px] md:mt-6 group-hover:opacity-0 transition-all duration-500">
            <div>
              <h3 className="font-bold md:font-semibold md:text-2xl leading-none">{data?.title}</h3>
              <p
                className="text-xs font-medium leading-[25px] md:text-lg mt-[8px]"
                style={{ color: data?.subTextColor }}
              >
                {data?.subText}
              </p>
            </div>
          </div>

          <button className="w-full top-full group-hover:top-0 transition-all duration-500 absolute h-[70px] rounded-[12px] bg-white flex justify-between items-center px-5 mt-5 ">
            <span className="text-lg font-medium text-primary-text">See Details</span>
            <img src={img2} alt="arrow-icon" className="size-7" />
          </button>
        </div>

        {/* sm default*/}
        <div className="md:hidden">
          <div className="w-full flex md:justify-between flex-col-reverse md:flex-row items-start md:items-center gap-3  text-white mt-[14px] md:mt-6">
            <div>
              <h3 className="font-bold md:font-semibold md:text-2xl leading-none">{data?.title}</h3>
              <p className="text-xs font-medium leading-5 md:text-lg mt-[6px]" style={{ color: data?.subTextColor }}>
                {data?.subText}
              </p>
            </div>
          </div>

          <button className="w-full h-12 rounded-[12px] bg-white flex justify-between items-center px-5 mt-6 md:hidden">
            <span className="text-sm font-medium text-primary-text">See Details</span>
            <img src={img2} alt="arrow-icon" className="size-5" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
