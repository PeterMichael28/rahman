import { useState } from "react";
import SectionHeader from "../SectionHeader";
import SingleCard from "./SingleCard";

const WhatPeopleSay = () => {
  const [activeTab, setActiveTab] = useState(0);
  const whatTheySayLists = [
    {
      title: "Dedication",
      subTitle:
        "I believe a product must be functional and I do not hand off any project unless the functionality has been tested.",
    },
    {
      title: "Time consciousness",
      subTitle:
        "The timing of handing over deliverables is very crucial to the process of building a product. I understand that and I make sure I deliver on time.",
    },
    {
      title: "Team Spirit",
      subTitle: "I am an absolute delight to work with because I balance fun and effectiveness well as a team member.",
    },
  ];
  return (
    <section id="whatsetsmeapart" className="space-y-8 lg:space-y-14 mt-7 lg:mt-12">
      <SectionHeader text="What sets me apart" />

      <div className="flex flex-col gap-y-6 lg:gap-y-8 w-full mt-7 lg:mt-12" id="">
        {whatTheySayLists.map((obj, id) => (
          <SingleCard obj={obj} id={id} key={id} activeTab={activeTab} setActiveTab={setActiveTab}/>
        ))}
      </div>
    </section>
  );
};

export default WhatPeopleSay;
