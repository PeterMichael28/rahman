import { useState } from "react";
import icons from "~/assets/js/icons";
import { classNames } from "~/utilities/classNames";

const SingleCard = ({ obj, id }) => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(-1);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className=" rounded-md overflow-hidden" key={id}>
      <div
        className="w-full lg:py-6 lg:px-8 p-5 bg-onTertiary text-white faq-shadow rounded-t-lg cursor-pointer relative z-20"
        onClick={() => toggleTab(id)}
      >
        <div className="flex items-center justify-between text-[#5a5566] font-medium">
          <span className="text-sm lg:text-lg leading-[120%]">{obj.title}</span>

          {activeTab !== id ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M1.66667 6.75L10 15.0833L18.3333 6.75"
                stroke="#5A5566"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
        <div className="bg-primary-text absolute left-10 -top-8 w-[2px] h-8 " />

        <div className="bg-primary-text absolute right-10 -top-8 w-[2px] h-8" />
      </div>
    </div>
  );
};

export default SingleCard;
