import React from "react";
import logo from "../../assets/logo.svg";

function Logo({className}) {
  return (
    <div className={`flex items-center font-semibold ${className}`}>
      <img alt="logo" src={logo} className="w-[35px]" />
      <h1 className="ml-1 text-[16px] text-primary">Hounter</h1>
    </div>
  );
}

export default Logo;
