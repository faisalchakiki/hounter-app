import React from "react";
import Logo from "../atoms/Logo";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twiter from "../../assets/icons/twiter.svg";

const Footer = () => {
  return (
    <div className="lg:mx-[100px] md:mx-[60px] mx-[30px] mt-[150px] mb-[50px]">
      <div className="flex h-[200px]">
        <div className="w-[35%] mr-auto">
          <Logo className="mb-[20px]" />
          <p className="text-gray mb-[20px]">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex items-center">
            <img src={facebook} alt="sosmed fb" className="mr-2" />
            <img src={twiter} alt="sosmed twit" className="mx-2" />
            <img src={instagram} alt="sosmed ig" className="mx-2" />
          </div>
        </div>
        <div className="w-fit mx-5">
          <h3 className="font-bold mb-[15px]">Property</h3>
          <p className="mb-[10px] text-gray">House</p>
          <p className="mb-[10px] text-gray">Apartement</p>
          <p className="mb-[10px] text-gray">Villa</p>
        </div>
        <div className="w-fit mx-5">
          <h3 className="font-bold mb-[15px]">Article</h3>
          <p className="mb-[10px] text-gray">New Article</p>
          <p className="mb-[10px] text-gray">Popular Article</p>
          <p className="mb-[10px] text-gray">Most Read</p>
          <p className="mb-[10px] text-gray">Tips & Tricks</p>
        </div>
        <div className="w-fit mx-5">
          <h3 className="font-bold mb-[15px]">Contact</h3>
          <p className="mb-[10px] text-gray">2464 Royal Ln. Mesa, New Jersey 45463</p>
          <p className="mb-[10px] text-gray">(671) 555-0110</p>
          <p className="mb-[10px] text-gray">info@hounter.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
