import { classNames } from "~/utilities/classNames";

const SingleCard = ({ obj, id, activeTab, setActiveTab }) => {
  return (
    <div className=" rounded-md overflow-hidden" key={id}>
      <div
        className={classNames(
          "w-full lg:py-6 lg:px-8 p-5 faq-shadow rounded-t-lg cursor-pointer relative z-20 transition-all duration-300",
          activeTab == id ? "bg-onTertiary" : "bg-white"
        )}
        onClick={() => setActiveTab(id)}
      >
        <div
          className={classNames(
            "flex items-center justify-between  font-medium transition-all duration-300",
            activeTab == id ? "text-[#5a5566]" : "text-primary-text"
          )}
        >
          <span
            className={classNames(
              "leading-[120%] transition-all duration-300",
              activeTab == id ? "text-base lg:text-lg " : "text-[20px] lg:text-[24px]"
            )}
          >
            {obj.title}
          </span>

          {activeTab !== id ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 20 21" fill="none">
              <path
                d="M1.66667 6.75L10 15.0833L18.3333 6.75"
                stroke="#5A5566"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 20 20" fill="none">
              <path
                d="M1.66667 13.75L10 5.41667L18.3333 13.75"
                stroke="#5A5566"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <div className={classNames(" w-full relative border-none")}>
        <div
          className={classNames(
            " w-full rounded-b-lg bg-[#f1ecfd] transition-all duration-300 relative z-20 overflow-hidden text-primary-text text-sm lg:text-lg leading-[150%]",
            activeTab == id ? "lg:py-6 lg:px-8 p-5 h-fit mt-6" : "h-0"
          )}
        >
          {obj.subTitle}
        </div>
        {/* anchors */}
        <div className="bg-primary-text absolute left-5 -top-8 w-[2px] h-8 " />

        <div className="bg-primary-text absolute right-5 -top-8 w-[2px] h-8" />
      </div>
    </div>
  );
};

export default SingleCard;
