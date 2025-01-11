import React from "react";

function FilterTab({ name, downArrow, activeTab, handleShowOptions }) {
  return (
    <div className="flex gap-1 items-center bg-slate-200 px-4 py-2 rounded-[2rem]">
      <span>{name}</span>
      <span
        onClick={() => handleShowOptions(name)}
        className={`${activeTab === name ? "rotate-180" : ""} cursor-pointer`}
      >
        {downArrow}
      </span>
    </div>
  );
}

export { FilterTab };
