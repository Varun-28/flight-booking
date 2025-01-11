import React from "react";
import { TbPlaneInflight } from "react-icons/tb";

const FlightCard = ({ flight, miscellaneousData }) => {
  const { ap, dt, at, farepr, tt, al } = flight;

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const { airlineMapping, airlineLogoMapping } = miscellaneousData;

  return (
    <div className="grid grid-cols-[10%_75%_15%] border rounded-md p-4 shadow hover:shadow-lg transition w-full">
      <div className="flex items-center justify-center">
        <img
          className="w-full h-full max-w-12 max-h-12 object-contain"
          src={airlineLogoMapping[al[0]]}
          alt={`${al[0]}-logo`}
        />
        <p className="text-gray-600">{airlineMapping[al[0]]}</p>
      </div>
      <div className="flex w-full justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-[18px] font-semibold">{dt}</span>
          <span>{ap[0]}</span>
        </div>
        <div className="flex flex-col gap-1 w-[30%]">
          <span className="text-center text-[14px] font-semibold">
            {formatDuration(tt[0])}
          </span>
          <span className="flex items-center">
            <span className="w-full border-b inline-block border-dashed border-[#00CE96] "></span>
            <TbPlaneInflight />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-[18px] font-semibold">{at}</span>
          <span>{ap[1]}</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-black font-semibold text-lg">
          ₹
          {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
            farepr
          )}
        </p>
        <button
          className="px-3 py-1 text-[#00CE96] font-semibold rounded-md bg-white border-2 border-[#00CE96] 
                   hover:bg-[#00CE96] hover:text-white transition-all duration-300"
          type="button"
          aria-label="book flight"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export { FlightCard };
