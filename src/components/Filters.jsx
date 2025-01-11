import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slider";
import { setPriceFilter, clearPriceFilter } from "../redux/actions/actions";

const Filters = () => {
  const dispatch = useDispatch();

  const { priceRange, fixedrange } = useSelector(
    (state) => state.flightReducer
  );
  const { min, max } = priceRange;
  const { minFixedPrice, maxFixedPrice } = fixedrange;

  const [sliderValue, setSliderValue] = useState([min, max]);

  const handlePriceChange = ([newMin, newMax]) => {
    setSliderValue([newMin, newMax]);
    dispatch(setPriceFilter({ minPrice: newMin, maxPrice: newMax }));
  };

  const handleClearFilters = () => {
    dispatch(clearPriceFilter());
  };

  return (
    <div className="filters p-4">
      <h3 className="font-bold text-lg mb-4">Filter by Price</h3>
      <div className="w-full max-w-md mx-auto">
        <Slider
          className={"slider"}
          value={sliderValue}
          min={minFixedPrice}
          max={maxFixedPrice}
          onChange={handlePriceChange}
        />
      </div>
      <div className="mt-4 text-gray-700">
        <span>₹{sliderValue[0]}</span> - <span>₹{sliderValue[1]}</span>
      </div>
      <button
        className="bg-red-500 text-white mt-4 px-4 py-2 rounded hover:bg-red-600 transition"
        onClick={handleClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export { Filters };
