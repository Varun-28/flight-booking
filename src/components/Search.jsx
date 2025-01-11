import React, { useState } from "react";
import { FaArrowRight, FaPersonDress } from "react-icons/fa6";
import { PiWheelchair } from "react-icons/pi";
import DatePicker from "react-datepicker";
import { GoArrowSwitch } from "react-icons/go";
import "react-datepicker/dist/react-datepicker.css";

function Search() {
  const [arrival, setArrival] = useState({
    name: "Mumbai",
    code: "BOM",
  });
  const [departure, setDeparture] = useState({
    name: "Delhi",
    code: "DEL",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="shadow-lg rounded-lg pb-4">
      <div className="flex items-center p-4 bg-white px-8 py-4 justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex justify-center items-center">
            <span>
              <FaArrowRight color="gray" />
            </span>

            <select className="p-2" defaultValue="Oneway">
              <option value="Oneway">Oneway</option>
              <option value="Return">Return</option>
              <option value="MultiCity">Multi-city</option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            <span>
              <FaPersonDress color="gray" />
            </span>
            <select className="p-2" defaultValue="1 Passenger">
              <option value="1 Passenger">1 Passenger</option>
              <option value="2 Passengers">2 Passengers</option>
              <option value="3 Passengers">3 Passengers</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <span>
              <PiWheelchair color="gray" />
            </span>
            <select className="p-2" defaultValue="Economy">
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>
        </div>
        <div>
          <select
            className="rounded-lg px-4 py-2 w-full"
            defaultValue="Recent Searches"
          >
            <option value="Mumbai to Delhi">Recent Searches</option>

            <option value="Mumbai to Delhi">Mumbai to Delhi</option>
            <option value="Chennai to Bangalore">Chennai to Bangalore</option>
            <option value="Kolkata to Hyderabad">Kolkata to Hyderabad</option>
          </select>
        </div>
      </div>

      <div className="flex items-center mt-6 w-full justify-between px-8">
        <div className="flex flex-col">
          <div className="text-gray-500 text-sm mb-1 px-4">From</div>
          <div className="flex gap-16 items-center border-b border-gray-300 px-4 py-3">
            <input
              type="text"
              value={arrival.name}
              onChange={(e) =>
                setArrival((prevArrival) => ({
                  ...prevArrival,
                  name: e.target.value,
                  code: "",
                }))
              }
              className="font-semibold text-black text-lg focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <span className="text-gray-400 text-sm ml-2 font-semibold">
              {arrival.code}
            </span>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-100 rounded-full p-2">
          <GoArrowSwitch color="gray" strokeWidth="0.5" size={20} />
        </div>

        <div className="flex flex-col">
          <div className="text-gray-500 text-sm mb-1 px-4">To</div>
          <div className="flex gap-16 items-center border-b border-gray-300 px-4 py-3">
            <input
              type="text"
              value={departure.name}
              onChange={(e) =>
                setDeparture((prevDeparture) => ({
                  ...prevDeparture,
                  name: e.target.value,
                  code: "",
                }))
              }
              className="font-semibold text-black text-lg focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <span className="text-gray-400 text-sm ml-2 font-semibold">
              {departure.code}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500 text-sm mb-1 px-4">Depart</div>
          <div className="flex items-center border-b border-gray-300 px-4 py-3">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMM"
              className="font-semibold text-black text-lg bg-transparent outline-none cursor-pointer"
              placeholderText="Select a date"
            />
            <span className="text-gray-400 text-sm ml-12">
              {selectedDate.toLocaleDateString("en-US", { weekday: "short" })}
            </span>
          </div>
        </div>
        <button
          className="px-3 py-1 text-primary font-semibold rounded-md bg-white border-2 border-primary 
                   hover:bg-primary hover:text-white transition-all duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };
