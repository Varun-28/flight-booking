import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlightCard } from "../../components/Components";
import { clearPriceFilter } from "../../redux/actions/actions";

const FlightResults = () => {
  const dispatch = useDispatch();

  const { miscellaneousData, filteredFlights, flights } = useSelector(
    (state) => state.flightReducer
  );
  const handleClearFilters = () => {
    dispatch(clearPriceFilter());
  };
  return (
    <>
      <div className="py-1 px-16 text-sm font-semibold">
        {filteredFlights?.length}{" "}
        <span className="text-gray-500">
          of{" "}
          <span
            className="underline cursor-pointer"
            onClick={handleClearFilters}
          >
            {flights?.length} flights
          </span>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center w-full py-4 px-16 gap-4">
        {filteredFlights?.length > 0 ? (
          filteredFlights?.map((flight, index) => (
            <FlightCard
              key={index}
              flight={flight}
              miscellaneousData={miscellaneousData}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No flights found for the selected filters.
          </p>
        )}
      </div>
    </>
  );
};

export { FlightResults };
