import React from "react";
import locationLogo from "../../assets/icons/location.svg";
import mailLogo from "../../assets/icons/mail-blue.svg";
import arrowRight from "../../assets/icons/right-arrow.svg";

function InputWithButton({ direction }) {
  if (direction === "search") {
    return (
      <div className="relative flex w-[85%] mb-[20px] md:mb-0">
        <img
          alt=""
          src={locationLogo}
          className="absolute top-[25%] left-[5%]"
        />
        <input
          className="w-full placeholder:text-sm pl-[12%] py-[10px] outline-none rounded-full border-[1px] border-slate-500"
          placeholder="Search for the location you want!"
        />
        <button className="flex items-center bg-green-button absolute right-1 bottom-1 top-1 rounded-full px-4 hover:bg-[#0c996a]">
          <p className="text-[15px] text-white mr-2 ">Search</p>
          <img alt="" src={arrowRight} className="h-[20px]" />
        </button>
      </div>
    );
  } else if (direction === "mail") {
    return (
      <div className="relative flex justify-center w-[40%] mx-auto mt-4">
        <img
          alt=""
          src={mailLogo}
          className="absolute w-[23px] top-[33%] left-[5%]"
        />
        <input
          className="w-full placeholder:text-sm pl-[12%] py-[10px] outline-none rounded-full border-[1px] border-slate-500"
          placeholder="Your email here"
        />
        <button className="flex items-center bg-green-button absolute right-1 bottom-1 top-1 rounded-full px-4 hover:bg-[#0c996a]">
          <p className="text-[15px] text-white mr-2 ">Subsribe Now</p>
        </button>
      </div>
    );
  }
}

export default InputWithButton;
