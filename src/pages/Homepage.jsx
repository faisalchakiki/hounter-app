import React from "react";
import Recommend from "../components/molecules/Recommend.jsx";
import InputWithButton from "../components/atoms/InputWithButton.jsx";
import ArticleRecommend from "../components/molecules/ArticleRecommend.jsx";
import Reviewer from "../components/molecules/Reviewer.jsx";
import Logo from "../components/atoms/Logo.jsx";
import Footer from "../components/molecules/Footer.jsx";
import SummaryHeader from "../components/molecules/SummaryHeader.jsx";
import Button from "../components/atoms/Button.jsx";
// header-left
import bgHeader from "../assets/header.svg";
import parner1 from "../assets/partner-1.svg";
import parner2 from "../assets/partner-2.svg";
import parner3 from "../assets/partner-3.svg";
import parner4 from "../assets/partner-4.svg";
import locationLogo from "../assets/icons/location.svg";
import arrowRight from "../assets/icons/right-arrow.svg";
// ready to sell
import bedroom from "../assets/icons/bedroom.svg";
import bathroom from "../assets/icons/bath.svg";
import garage from "../assets/icons/car-garage.svg";
import floor from "../assets/icons/floor.svg";
import ownerAvatar from "../assets/owner.svg";
import imageMain from "../assets/group-image2.png";
// subs image
import subs1 from "../assets/icons/big-buble.svg";
import subs2 from "../assets/icons/big-buble2.svg";
import subs3 from "../assets/icons/buble-house.svg";
import subs4 from "../assets/icons/buble-house2.svg";
import subs5 from "../assets/icons/avatar-user2.svg";
import subs6 from "../assets/icons/avatar-user.svg";
import subs7 from "../assets/icons/avatar-user3.svg";
import Navbar from "../components/molecules/Navbar.jsx";

function Homepage() {
  
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <header className="relative">
        <div className="relative flex">
          <main className="w-full h-fit grid grid-cols-2 z-50">
            <section className="pt-5 lg:ml-[100px] md:ml-[60px] ml-[30px]">
              <Logo className="mb-[50px]" />
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
                <InputWithButton direction="search" />
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
                <Navbar />
                <SummaryHeader />
              </div>
            </section>
          </main>
        </div>
        {/* <div className='w-[35%] absolute left-0 h-[35vh] rounded-br-full rounded--full bg-gradient-to-r from-[#a6f3f0d0] to-[#8aecb9ca] blur-md'></div> */}
      </header>
      <Recommend />
      <section className="lg:ml-[100px] md:ml-[60px] ml-[30px] mt-[110px]">
        <div className="flex items-start justify-between h-[100]">
          <section className="flex-1">
            <div className="flex items-center text-yellow">
              <hr className="w-[40px] mr-1" />
              <p className="text-[14px] text-yellow">Ready to Sell!</p>
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
                <Button direction="contact" value="Contact Now" />
              </div>
            </div>
          </section>
          <section className="flex-1">
            <img alt="" src={imageMain} className="w-[65%]" />
          </section>
        </div>
      </section>
      <section className="mt-[110px]">
        <div className="flex flex-col items-center">
          <hr className="w-[40px] text-yellow mb-2" />
          <p className="text-[14px] text-yellow mb-3">See Our Review</p>
          <h3 className="text-black font-bold text-[25px]">
            What Our User Say About Us
          </h3>
        </div>
        <Reviewer />
      </section>
      <section className="mt-[110px]">
        <div className="flex flex-col items-center">
          <hr className="w-[40px] text-yellow mb-2" />
          <p className="text-[14px] text-yellow mb-3">
            See Tips And Trick From Our Partnership
          </p>
          <h3 className="text-black font-bold text-[25px] text-center">
            Find Out More About
            <br />
            Selling And Buying Homes
          </h3>
          <Button value="More Article" className="ml-0 mt-5" />
        </div>
        <ArticleRecommend />
      </section>
      <section className="relative lg:mx-[100px] md:mx-[60px] mx-[30px] mt-[150px]">
        <div className="z-10 bg-gray rounded-[25px] py-[60px] bg-gradient-to-r from-[#98acee] to-[#f6fffa]">
          <div className="z-50">
            <h3 className="text-[28px] font-semibold text-center">
              Subscribe For More Info
              <br /> and update from Hounter
            </h3>
            <InputWithButton direction="mail" />
          </div>
        </div>
        <div>
          <img src={subs1} alt="" className="absolute top-[5%] left-[80%]" />
          <img src={subs2} alt="" className="absolute top-[5%] left-[10%]" />
          <img
            src={subs3}
            alt=""
            className="absolute bottom-[15%] left-[15%]"
          />
          <img
            src={subs4}
            alt=""
            className="absolute bottom-[13%] right-[10%]"
          />
          <img src={subs5} alt="" className="absolute top-[25%] left-[18%]" />
          <img
            src={subs6}
            alt=""
            className="absolute bottom-[35%] right-[22%] w-[35px]"
          />
          <img
            src={subs7}
            alt=""
            className="absolute bottom-[35%] left-[10%]"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
