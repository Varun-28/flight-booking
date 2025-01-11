import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort, clearSort } from "../redux/actions/actions";
import { SORT_TYPE } from "../utils/constants";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Sort = ({ name, downArrow, activeTab, handleShowOptions }) => {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector((state) => state.flightReducer);

  const handleSort = (sortOption) => {
    dispatch(setSort(sortOption));
  };

  const arrow = (option) => {
    if (sortBy === option) {
      return sortOrder === "asc" ? (
        <IoIosArrowRoundUp />
      ) : (
        <IoIosArrowRoundDown />
      );
    }
    return "";
  };

  return (
    <div className="relative">
      <div className="flex gap-1 items-center bg-slate-200 px-4 py-2 rounded-[2rem]">
        <span>{name}</span>
        <span
          onClick={() => handleShowOptions(name)}
          className={`${activeTab === name ? "rotate-180" : ""} cursor-pointer`}
        >
          {downArrow}
        </span>
      </div>
      {activeTab === name && (
        <div className="absolute left-0 top-10 bg-white w-64 border shadow rounded-md">
          <div className="flex justify-between items-center py-2 px-4">
            <span>{name}</span>
            <div className="flex gap-3 items-center">
              <button
                className="cursor-pointer font-semibold text-primary"
                onClick={() => dispatch(clearSort())}
              >
                Clear
              </button>
              <span
                onClick={() => handleShowOptions(name)}
                className="cursor-pointer"
              >
                <IoCloseOutline size={20} />
              </span>
            </div>
          </div>
          <ul className="">
            {SORT_TYPE.split(",").map((option, idx) => (
              <li
                key={idx}
                className={`cursor-pointer py-2 px-4 inline-flex w-full items-center ${
                  sortBy === option
                    ? "bg-lightgreen font-semibold"
                    : "hover:bg-slate-200"
                }`}
                onClick={() => handleSort(option)}
              >
                {option === "price" && "Price Low to High"}
                {option === "duration" && "Duration Shortest First"}
                {option === "departure" && "Depart Earliest First"}
                {option === "arrival" && "Arrival Earliest First"}{" "}
                {arrow(option)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Sort };
