import React from "react";
import Recommend from "../components/molecules/Recommend.jsx";
// header-left
import logo from "../assets/logo.svg";
import bgHeader from "../assets/header.svg";
import parner1 from "../assets/partner-1.svg";
import parner2 from "../assets/partner-2.svg";
import parner3 from "../assets/partner-3.svg";
import parner4 from "../assets/partner-4.svg";
import locationLogo from "../assets/icons/location.svg";
import arrowRight from "../assets/icons/right-arrow.svg";
// header-right
import peoples from "../assets/people-react.svg";
import houseReact from "../assets/house-header.svg";
import userReact from "../assets/user-react.svg";
// recomenndation
import houseLogo from "../assets/icons/house-logo.svg";
import villaLogo from "../assets/icons/villa-logo.svg";
import apartLogo from "../assets/icons/apart-logo.svg";
import arrowLeft from "../assets/icons/left-arrow.svg";
// ready to sell
import bedroom from "../assets/icons/bedroom.svg";
import bathroom from "../assets/icons/bath.svg";
import garage from "../assets/icons/car-garage.svg";
import floor from "../assets/icons/floor.svg";
import phoneWhite from "../assets/icons/phone-white.svg";
import ownerAvatar from "../assets/owner.svg";
import imageMain from "../assets/group-image2.png";

function Homepage() {
  return (
    <div className="max-w-[1440px] mx-auto pb-[200px] bg-white">
      <header className="relative">
        <div className="relative flex">
          <main className="w-full h-fit grid grid-cols-2 z-50">
            <section className="pt-5 lg:ml-[100px] md:ml-[60px] ml-[30px]">
              <div className="flex items-center font-semibold mb-[50px]">
                <img alt="logo" src={logo} className="w-[35px]" />
                <h1 className="ml-1 text-[16px] text-primary">Hounter</h1>
              </div>
              <div className="flex flex-col justify-evenly h-[80%]">
                <h3 className="text-[40px] font-bold mb-[20px] md:mb-0">
                  Find The Place To
                  <br />
                  Live<span className="transparant"> Your Dreams</span>
                  <br />
                  Easily Here
                </h3>
                <p className="text-gray w-[85%] mb-[20px] md:mb-0">
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you
                </p>
                <div className="relative flex w-[85%] mb-[20px] md:mb-0">
                  <img
                    alt=""
                    src={locationLogo}
                    className="absolute top-[25%] left-[5%]"
                  />
                  <input
                    className="w-full placeholder:text-sm pl-[12%] py-[10px] rounded-full border-[1px] border-slate-500"
                    placeholder="Search for the location you want!"
                  />
                  <button className="flex items-center bg-[#10B981] absolute right-1 bottom-1 top-1 rounded-full px-4 hover:bg-[#0c996a]">
                    <p className="text-[15px] text-white mr-2 ">Search</p>
                    <img alt="" src={arrowRight} className="h-[20px]" />
                  </button>
                </div>
                <div className="w-[70%]">
                  <p className="text-gray">Our Partnership </p>
                  <div className="flex items-center justify-between">
                    <img alt="partnership" src={parner1} />
                    <img alt="partnership" src={parner2} />
                    <img alt="partnership" src={parner3} />
                    <img alt="partnership" src={parner4} />
                  </div>
                </div>
              </div>
            </section>
            <section className="relative">
              <img alt="bg-header" src={bgHeader} className="w-[720px]" />
              <div className="absolute top-0 w-[100%] h-[100%] flex flex-col justify-between">
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
                    <div className="text-white px-3 py-2 rounded-full border-white border-[1px]">
                      Property
                    </div>
                  </div>
                  <div className="text-[#10B981] px-3 py-2 rounded-full border-green-light border-[1px] bg-green-light">
                    Sign Up!
                  </div>
                </nav>
                <div className="flex items-start justify-start mb-[10%] pl-[10%] scrollbar overflow-x-auto">
                  <div className="bg-white flex items-center justify-evenly py-1 px-2 rounded-[30px] mr-5 w-full">
                    <img src={peoples} alt="img-react" className="h-[85px]" />
                    <div className="flex flex-col justify-center items-start">
                      <h3 className="text-black fnt-bold">1K+ People</h3>
                      <p className="text-gray">Successfully Getting Home</p>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-evenly py-1 px-2 rounded-[30px] mr-5 w-full">
                    <img
                      src={houseReact}
                      alt="img-react"
                      className="h-[85px]"
                    />
                    <div className="flex flex-col justify-center items-start">
                      <h3 className="text-black fnt-bold">1K+ People</h3>
                      <p className="text-gray">Successfully Getting Home</p>
                    </div>
                  </div>
                  <div className="bg-white flex items-center justify-evenly py-1 px-2 rounded-[30px] mr-5">
                    <img src={userReact} alt="img-react" className="h-[85px]" />
                    <div className="flex flex-col justify-center items-start">
                      <h3 className="text-black fnt-bold">1K+ People</h3>
                      <p className="text-gray">Successfully Getting Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        {/* <div className='w-[35%] absolute left-0 h-[35vh] rounded-br-full rounded--full bg-gradient-to-r from-[#a6f3f0d0] to-[#8aecb9ca] blur-md'></div> */}
      </header>
      <section className="lg:ml-[100px] md:ml-[60px] ml-[30px] mt-[110px]">
        <div className="flex w-full items-center  justify-between">
          <div className="w-[30%]">
            <div className="flex items-center text-yellow">
              <hr className="w-[40px] mr-1" />
              <p className="text-[14px]">Our Recommendation</p>
            </div>
            <h3 className="text-black font-bold text-[25px] ml-[40px]">
              Featured House
            </h3>
          </div>
          <div className="flex w-[50%] items-center justify-start">
            <div className="flex items-center px-3 py-2 mx-2 md:mx-5 border-[2px] border-green-light bg-green-light text-green rounded-[15px]">
              <img alt="houseLogo" src={houseLogo} className="w-[18px] mr-1" />
              <p className="text-[17px]">House</p>
            </div>
            <div className="flex items-center px-3 py-2 mx-2 md:mx-5 border-[2px] border-gray rounded-[15px]">
              <img alt="villaLogo" src={villaLogo} className="w-[18px] mr-1" />
              <p className="text-[17px]">Villa</p>
            </div>
            <div className="flex items-center px-3 py-2 mx-2 md:mx-5 border-[2px] border-gray rounded-[15px]">
              <img alt="apartLogo" src={apartLogo} className="w-[18px] mr-1" />
              <p className="text-[17px]">Apartement</p>
            </div>
          </div>
          <div className="flex w-[20%] items-center">
            <bottom className="bg-slate-300 py-2 px-5 rounded-[15px] flex justify-center items-center mx-2">
              <img alt="" src={arrowLeft} className="w-[10px]" />
            </bottom>
            <bottom className="bg-[#10B981] py-2 px-5 rounded-[15px] flex justify-center items-center mx-2">
              <img alt="" src={arrowRight} className="w-[10px]" />
            </bottom>
          </div>
        </div>
        <Recommend />
      </section>
      <section className="lg:ml-[100px] md:ml-[60px] ml-[30px] mt-[110px]">
        <div className="flex items-start justify-between h-[100]">
          <section className="flex-1">
            <div className="flex items-center text-yellow">
              <hr className="w-[40px] mr-1" />
              <p className="text-[14px]">Ready to Sell!</p>
            </div>
            <div className="ml-[40px] w-[70%]">
              <h3 className="text-black font-bold text-[25px] mb-[3%]">
                Let’s tour and see our house!
              </h3>
              <p className="text-gray mb-[3%]">
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
              <h3 className="mb-[10px] font-semibold">House Detail</h3>
              <div className="grid grid-cols-2 items-center space-y-3 mb-[3%]">
                <div className="flex items-center">
                  <img alt="" src={bedroom} className="w-[20px] mr-2" />
                  <p>4 Bedrooms</p>
                </div>
                <div className="flex items-center">
                  <img alt="" src={bathroom} className="w-[20px] mr-2" />
                  <p>2 Bathrooms</p>
                </div>
                <div className="flex items-center">
                  <img alt="" src={garage} className="w-[20px] mr-2" />
                  <p>1 Carport</p>
                </div>
                <div className="flex items-center">
                  <img alt="" src={floor} className="w-[20px] mr-2" />
                  <p>2 Floors</p>
                </div>
              </div>
              <hr className="bg-gray h-[0.5px] w-[85%]" />
              <div className="flex items-center mt-[5%]">
                <img
                  alt=""
                  src={ownerAvatar}
                  className="w-[40px] mr-4 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Dianne</h3>
                  <p className="text-gray text-[15px]">Manager Director</p>
                </div>
                <div className="flex items-center bg-green text-white py-2 px-3 rounded-full ml-[20%]">
                  <img alt="" src={phoneWhite} className="w-[15px] mr-1" />
                  <p>Contact Now</p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex-1">
            <img alt="" src={imageMain} className="w-[65%]" />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
