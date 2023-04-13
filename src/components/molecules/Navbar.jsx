import React from "react";
import arrowBottom from "../../assets/icons/arrow-bottom.svg";
import Button from "../atoms/Button";

function Navbar() {
  const DropdownMenu = (dropdown, option) => {
    const dropdownSelector = document.getElementById(dropdown);
    const optionMenu = document.getElementById(option);
    if (optionMenu.classList.contains("flex")) {
      optionMenu.classList.remove("flex");
      optionMenu.classList.add("hidden");
    } else {
      optionMenu.classList.remove("hidden");
      optionMenu.classList.add("flex");
    }
  };
  return (
    <nav className="flex mt-5 pl-[10%] justify-between w-[100%] pr-10">
      <div className="flex justify-around items-center w-[70%]">
        <a
          href="/"
          className="text-white px-3 py-2 rounded-full border-white border-[1px]"
        >
          About Us
        </a>
        <a
          href="/"
          className="text-white px-3 py-2 rounded-full border-white border-[1px]"
        >
          Article
        </a>
        <div className="relative">
          <div
            id="dropdownProperty"
            className="flex items-center px-3 py-2 rounded-full border-white border-[1px] cursor-pointer"
            onClick={() => DropdownMenu("dropdownProperty", "optionProperty")}
          >
            <p className="text-white">Property</p>
            <img src={arrowBottom} alt="" className="ml-2 mt-1" />
          </div>
          <div
            id="optionProperty"
            className="flex-col absolute bottom-[-105px] bg-white w-full rounded-md text-center p-1 hidden"
          >
            <a href="" className="py-1 hover:bg-slate-200">
              option1
            </a>
            <a href="" className="py-1 hover:bg-slate-200">
              option2
            </a>
            <a href="" className="py-1 hover:bg-slate-200">
              option3
            </a>
          </div>
        </div>
      </div>
      <Button value='Sign Up!' className='ml-0 bg-green-light px-4' type='light' />
    </nav>
  );
}

export default Navbar;
