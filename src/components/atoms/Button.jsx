import React from "react";
import phoneWhite from "../../assets/icons/phone-white.svg";

function Button({ direction, value, className,type}) {
  if(type === 'light'){
    return (
      <button className={`flex items-center bg-green-light py-2 px-3 rounded-full ${className}`}>
        <p className='text-primary'>{value}</p>
      </button>
    );
  }
  return (
    <button className={`flex items-center bg-green-button py-2 px-3 rounded-full ${className}`}>
      {direction === "contact" ? (
        <img alt="" src={phoneWhite} className="w-[15px] mr-1" />
      ) : null}
      <p className='text-white'>{value}</p>
    </button>
  );
}

export default Button;
