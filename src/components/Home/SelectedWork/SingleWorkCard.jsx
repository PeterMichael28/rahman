import { Link } from "react-router-dom";
import Icon from "./WorkIcon";

const SingleWorkCard = ({ data }) => {
  return (
    <div
      className="w-full lg:h-[600px] rounded-[20px] relative pt-[40px] lg:pt-[70px] group"
      style={{ background: data.bgColor }}
    >
      {/* header */}
      <div className="flex justify-center items-center w-full absolute -top-10 max-sm:scale-75">
        <Icon bg={data.headerBgColor} />
        <span className="text-primary-text font-semibold text-[25px] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {data?.title}
        </span>
      </div>

      <div className="relative overflow-hidden h-full">
        {/* sub text */}
        <p
          className="font-semibold text-sm lg:text-[20px] text-center max-w-[470px] mx-auto lg:px-4 px-6"
          style={{ color: data?.subtextColor }}
        >
          {data?.subText}
        </p>

        {/* phone */}
        <div className="flex items-center justify-center mt-10 max-sm:px-10">
          <img src={data?.frontImage} alt="image" className="h-ful" />
        </div>

        {/* hover card */}
        <Link
          to={`/works/${data.title}`}
          className="w-[90%] px-8 py-4 rounded-full case_study_blur absolute bottom-7 mx-auto text-white left-1/2 -translate-x-1/2 flex justify-between items-center translate-y-[200%] group-hover:translate-y-0 transition-all duration-300"
        >
          <p className="text-white text-sm font-semibold">Read Case Study</p>

          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
            <circle cx="10.75" cy="10" r="9.375" stroke="white" strokeWidth="1.25" />
            <path
              d="M14.5 9.16016C14.1548 9.16016 13.875 9.43998 13.875 9.78516C13.875 10.1303 14.1548 10.4102 14.5 10.4102L14.5 9.16016ZM27.4419 10.2271C27.686 9.98302 27.686 9.58729 27.4419 9.34321L23.4645 5.36574C23.2204 5.12166 22.8247 5.12166 22.5806 5.36574C22.3365 5.60982 22.3365 6.00554 22.5806 6.24962L26.1161 9.78516L22.5806 13.3207C22.3365 13.5648 22.3365 13.9605 22.5806 14.2046C22.8247 14.4487 23.2204 14.4487 23.4645 14.2046L27.4419 10.2271ZM14.5 10.4102L27 10.4102L27 9.16016L14.5 9.16016L14.5 10.4102Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SingleWorkCard;
