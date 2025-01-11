import React, { useState } from "react";
import { Sort, Filters, FilterTab } from "./Components";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FILTER_TAG_NAMES } from "../utils/constants";

function AllFilters() {
  const [activeTab, setActiveTab] = useState("");

  const handleShowOptions = (name) => {
    setActiveTab((prev) => (prev === name ? "" : name));
  };

  return (
    <div className="flex gap-2 items-center py-4 px-16">
      <PiSlidersHorizontalBold className="text-primary text-2xl" />
      <Sort
        name={"Sort"}
        downArrow={<BiSolidDownArrow size={12} />}
        activeTab={activeTab}
        handleShowOptions={handleShowOptions}
      />
      <Filters
        name={"Price"}
        downArrow={<BiSolidDownArrow size={12} />}
        activeTab={activeTab}
        handleShowOptions={handleShowOptions}
      />
      {FILTER_TAG_NAMES.split(",").map((tagName, idx) => (
        <FilterTab
          key={idx}
          name={tagName}
          downArrow={<BiSolidDownArrow size={12} />}
          activeTab={activeTab}
          handleShowOptions={handleShowOptions}
        />
      ))}
    </div>
  );
}

export { AllFilters };
