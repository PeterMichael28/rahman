import { Link } from "react-router-dom";
import Icon from "./WorkIcon";

const SingleWorkCard = ({ data }) => {
  return (
    <Link
      to={`/works/${encodeURIComponent(data.title)}`}
      className="w-full lg:h-[530px] rounded-[20px] relative pt-[40px] lg:pt-[70px] group"
      style={{ background: data.bgColor }}
      data-aos="fade-up"
    >
      {/* header */}
      <div className="flex justify-center items-center w-full absolute -top-10 max-sm:scale-75">
        <Icon bg={data.headerBgColor} />
        <span className="text-primary-text font-medium text-[25px] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {data?.title}
        </span>
      </div>

      <div className="relative overflow-hidden h-full">
        {/* sub text */}
        <p
          className="font-medium lg:font-normal text-sm lg:text-[20px] leading-[150%] text-center max-w-[510px] mx-auto lg:px-4 px-6"
          style={{ color: data?.subtextColor }}
        >
          {data?.subText}
        </p>

        {/* phone */}
        <div className="flex items-center justify-center lg:mt-9 mt-7 max-sm:px-10">
          <img src={data?.frontImage} alt="image" className="h-[315px] lg:h-[370px]" />
        </div>

        {/* hover card */}
        <div className="w-[90%] py-4 px-5  h-[48px] lg:h-[70px] lg:px-8 lg:py-5 rounded-full case_study_blur absolute bottom-4 lg:bottom-7 mx-auto text-white left-1/2 -translate-x-1/2 flex justify-between items-center lg:translate-y-[200%] lg:group-hover:translate-y-0 transition-all duration-700">
          <p className="text-white text-sm lg:text-lg font-medium">See Details</p>

          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 23 16" fill="none">
            <rect x="0.625" y="0.625" width="14.75" height="14.75" rx="3.375" stroke="white" strokeWidth="1.25" />
            <path
              d="M9.7478 7.375C9.40262 7.375 9.1228 7.65482 9.1228 8C9.1228 8.34518 9.40262 8.625 9.7478 8.625L9.7478 7.375ZM22.6897 8.44194C22.9338 8.19786 22.9338 7.80213 22.6897 7.55806L18.7123 3.58058C18.4682 3.3365 18.0725 3.3365 17.8284 3.58058C17.5843 3.82466 17.5843 4.22039 17.8284 4.46447L21.3639 8L17.8284 11.5355C17.5843 11.7796 17.5843 12.1753 17.8284 12.4194C18.0725 12.6635 18.4682 12.6635 18.7123 12.4194L22.6897 8.44194ZM9.7478 8.625L22.2478 8.625L22.2478 7.375L9.7478 7.375L9.7478 8.625Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SingleWorkCard;
