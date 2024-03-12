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
        className="w-full lg:py-6 lg:px-8 p-5 bg-onTertiary border text-white shadow rounded-t-lg cursor-pointer relative z-40"
        onClick={() => toggleTab(id)}
      >
        <div className="flex items-center justify-between text-[#5a5566] font-semibold">
          <span className="text-sm lg:text-lg">{obj.title}</span>

          {activeTab !== id ? <span>{icons.chevronDown}</span> : <span>{icons.chevronUp}</span>}
        </div>
      </div>

      <div className={classNames(" w-full relative border-none")}>
        <div
          className={classNames(
            " w-full rounded-b-lg bg-[#f1ecfd] transition-all duration-300 relative z-40 overflow-hidden text-primary-text text-sm lg:text-lg leading-[150%]",
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
