import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slider";
import { setPriceFilter, clearPriceFilter } from "../redux/actions/actions";
import { IoCloseOutline } from "react-icons/io5";

const Filters = ({ name, downArrow, activeTab, handleShowOptions }) => {
  const dispatch = useDispatch();

  const { priceRange, fixedrange } = useSelector(
    (state) => state.flightReducer
  );
  const { min, max } = priceRange;
  const { minFixedPrice, maxFixedPrice } = fixedrange;

  const [sliderValue, setSliderValue] = useState([min, max]);
  useEffect(() => {
    setSliderValue([min, max]);
  }, [min, max]);

  const handlePriceChange = ([newMin, newMax]) => {
    dispatch(setPriceFilter({ minPrice: newMin, maxPrice: newMax }));
  };

  const handleClearFilters = () => {
    dispatch(clearPriceFilter());
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
        <div className="absolute left-0 top-10 bg-white py-2 px-4 w-64 border shadow rounded-md">
          <div className="flex justify-between items-center">
            <span>{name}</span>
            <div className="flex gap-3 items-center">
              <button
                className="cursor-pointer font-semibold text-primary"
                onClick={handleClearFilters}
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
          <div className="w-full max-w-md mx-auto">
            <Slider
              className="slider"
              value={sliderValue}
              min={minFixedPrice}
              max={maxFixedPrice}
              onChange={handlePriceChange}
            />
          </div>
          <div className="mt-4 text-gray-700 flex justify-between">
            <span>₹{sliderValue[0]}</span>
            <span>₹{sliderValue[1]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export { Filters };
