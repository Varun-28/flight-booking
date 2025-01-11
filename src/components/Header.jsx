import React from "react";
import { MdFlight } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { Search } from "./Components";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-4 sticky top-0 z-10 text-white font-semibold bg-gradient-to-r from-[#00A3AA] to-[#00CE96]">
        <div className="flex justify-between items-center gap-2">
          <MdFlight size={30} />
          <h1>Flight Booking</h1>
        </div>
        <nav>
          <ul className="flex justify-between gap-8">
            <li className="bg-[#1AD5C0] rounded-[3.5rem] px-4 py-2 cursor-pointer">
              FLIGHT
            </li>
            <li className="px-4 py-2 cursor-pointer">HOTEL</li>
            <li className="px-4 py-2 cursor-pointer">VISA</li>
            <li className="px-4 py-2 cursor-pointer">AI TRIP</li>
            <li className="px-4 py-2 cursor-pointer">GROUP TOURS</li>
          </ul>
        </nav>
        <div className="flex justify-between items-center gap-16">
          <span className="cursor-pointer">
            <IoSunny size={24} />
          </span>
          <button aria-label="login button">LOGIN</button>
        </div>
      </div>
      {/* <Search /> */}
    </>
  );
}

export { Header };
