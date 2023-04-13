import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// header-right
import peoples1 from "../../assets/icons/avatar-user.svg";
import peoples2 from "../../assets/icons/avatar-user2.svg";
import peoples3 from "../../assets/icons/avatar-user3.svg";
import houseReact from "../../assets/house-header.svg";
import userReact from "../../assets/icons/avatar-user2.svg";

function SummaryHeader() {
  return (
    <Swiper
      slidesPerView={'auto'}
      className="flex items-start justify-start mb-[10%] pl-[10%] scrollbar overflow-x-auto"
    >
      <SwiperSlide className="bg-white flex items-center justify-evenly py-1 px-2 rounded-[30px] mr-5 max-w-fit">
        <div className="flex items-center">
          <img src={peoples1} alt="img-react" className="h-[85px] py-5" />
          1
          <img
            src={peoples2}
            alt="img-react"
            className="h-[85px] py-5 ml-[-15%]"
          />
          <img
            src={peoples3}
            alt="img-react"
            className="h-[85px] py-5 ml-[-15%]"
          />
        </div>
        <div className="flex flex-col justify-center items-start ml-[-15%]">
          <h3 className="font-bold">1K+ People</h3>
          <p className="text-gray text-[13px]">Successfully Getting Home</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white flex items-center justify-evenly py-1 px-3 rounded-[30px] mr-5 max-w-fit">
        <img src={houseReact} alt="img-react" className="h-[85px] py-5 mr-2" />
        <div className="flex flex-col justify-center items-start">
          <h3 className="font-bold">56 Houses</h3>
          <p className="text-gray text-[13px]">Sold Monthly</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white flex items-center justify-evenly py-1 px-3 rounded-[30px] mr-5 max-w-fit">
        <img src={userReact} alt="img-react" className="h-[85px] py-5 mr-2" />
        <div className="flex flex-col justify-center items-start">
          <h3 className="font-bold">4K+</h3>
          <p className="text-gray text-[13px]">People Looking for New Homes</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SummaryHeader;
