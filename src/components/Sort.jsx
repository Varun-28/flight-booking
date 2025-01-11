import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort, clearSort } from "../redux/actions/actions";

const Sort = () => {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector((state) => state.flightReducer);

  const handleSort = (sortOption) => {
    dispatch(setSort(sortOption));
  };

  const arrow = (option) => {
    if (sortBy === option) {
      return sortOrder === "asc" ? "↑" : "↓";
    }
    return "";
  };

  return (
    <div className="sort p-4">
      <h3 className="font-bold text-lg mb-2">Sort By</h3>
      <ul className="space-y-2">
        {["price", "duration", "departure", "arrival"].map((option, idx) => (
          <li
            key={idx}
            className={`cursor-pointer ${
              sortBy === option ? "text-blue-500" : ""
            }`}
            onClick={() => handleSort(option)}
          >
            {option === "price" && "Price Low to High"}
            {option === "duration" && "Duration Shortest First"}
            {option === "departure" && "Depart Earliest First"}
            {option === "arrival" && "Arrival Earliest First"} {arrow(option)}
          </li>
        ))}
      </ul>
      <button
        className="bg-red-500 text-white mt-4 px-4 py-2 rounded"
        onClick={() => dispatch(clearSort())}
      >
        Clear Sort
      </button>
    </div>
  );
};

export { Sort };
