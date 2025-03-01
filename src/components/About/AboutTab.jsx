import { useState } from "react";
import { classNames } from "~/utilities/classNames";
import { Link } from "react-scroll";

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState("about");
  const tabLists = [
    {
      title: "About me",
      href: "about",
    },
    {
      title: "Experience",
      href: "experience",
    },
    {
      title: "What sets me apart",
      href: "whatsetsmeapart",
    },
  ];

  return (
    <div className="hidden lg:block w-full space-y-5">
      {tabLists.map((tab) => (
        <Link
          key={tab.title}
          smooth
          duration={500}
          to={tab.href}
          className={classNames(
            "w-full py-3 px-6 flex items-center border border-[#f1f0f5] rounded-lg text-[#5A5566] cursor-pointer transition-all duration-300",
            activeTab === tab.href && "bg-[#F1ECFD] text-primary font-bold border-none justify-between"
          )}
          onClick={() => setActiveTab(tab.href)}
        >
          {tab.title}

          {activeTab === tab.href && (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M7.29169 0.5L7.29169 14.5" stroke="#7444EE" strokeWidth="0.8" />
              <path d="M14 7.79175L4.76837e-07 7.79175" stroke="#7444EE" strokeWidth="0.8" />
              <path d="M3.01007 12.2429L11.2597 3.99334" stroke="#7444EE" strokeWidth="0.8" />
              <path d="M3.14227 3.79272L11.3919 12.0423" stroke="#7444EE" strokeWidth="0.8" />
            </svg>
          )}
        </Link>
      ))}
    </div>
  );
};

export default AboutTab;
