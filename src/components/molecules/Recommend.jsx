import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
// recomenndation
import houseLogo from "../../assets/icons/house-logo.svg";
import villaLogo from "../../assets/icons/villa-logo.svg";
import apartLogo from "../../assets/icons/apart-logo.svg";
import arrowRight from "../../assets/icons/right-arrow.svg";
import arrowLeft from "../../assets/icons/left-arrow.svg";
import housePict from "../../assets/house.svg";
import apartPict from "../../assets/apartemnt.svg";
import ownerAvatar from "../../assets/owner.svg";
import titleHouse from "../../assets/icons/populer-logo.svg";

function Recommend() {
  const propertyMenu = ["House", "Villa", "Apartment"];
  const propertyHouse = [
    {
      id: 1,
      name: "Roseland House",
      price: "35.000.000",
      owner: {
        name: "Dianne Russell",
        address: "Manchester, Kentucky",
        picture: ownerAvatar,
      },
      picture: {
        url: housePict,
        alt: "house Picture",
      },
      type: "House",
    },
    {
      id: 2,
      name: "Woodlandside",
      price: "20.000.000",
      owner: {
        name: "Robert Fox",
        address: "Dr. San Jose, South Dakota",
        picture: ownerAvatar,
      },
      picture: {
        url: apartPict,
        alt: "house Picture",
      },
      type: "House",
    },
    {
      id: 3,
      name: "Roseland House",
      price: "35.000.000",
      owner: {
        name: "Dianne Russell",
        address: "Manchester, Kentucky",
        picture: ownerAvatar,
      },
      picture: {
        url: housePict,
        alt: "house Picture",
      },
      type: "House",
    },
    {
      id: 4,
      name: "Woodlandside",
      price: "20.000.000",
      owner: {
        name: "Robert Fox",
        address: "Dr. San Jose, South Dakota",
        picture: ownerAvatar,
      },
      picture: {
        url: apartPict,
        alt: "house Picture",
      },
      type: "House",
    },
    {
      id: 5,
      name: "Roseland House",
      price: "35.000.000",
      owner: {
        name: "Dianne Russell",
        address: "Manchester, Kentucky",
        picture: ownerAvatar,
      },
      picture: {
        url: housePict,
        alt: "house Picture",
      },
      type: "House",
    },
    {
      id: 6,
      name: "Woodlandside",
      price: "20.000.000",
      owner: {
        name: "Robert Fox",
        address: "Dr. San Jose, South Dakota",
        picture: ownerAvatar,
      },
      picture: {
        url: apartPict,
        alt: "house Picture",
      },
      type: "House",
    },
  ];
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevButtonClick = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      setActiveIndex(swiper.activeIndex);
    }
  };

  const handleNextButtonClick = () => {
    if (swiper !== null) {
      swiper.slideNext();
      setActiveIndex(swiper.activeIndex);
    }
  };

  return (
    <div className="lg:ml-[100px] md:ml-[60px] ml-[30px] mt-[110px]">
      <div className="flex w-full items-center  justify-between">
        <div className="w-[30%]">
          <div className="flex items-center text-yellow">
            <hr className="w-[40px] mr-1" />
            <p className="text-[14px] text-yellow">Our Recommendation</p>
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
          <bottom onClick={handlePrevButtonClick} className=" bg-slate-300 py-2 px-5 rounded-[15px] flex justify-center items-center mx-2 cursor-pointer hover:bg-slate-400">
            <img alt="" src={arrowLeft} className="w-[10px]" />
          </bottom>
          <bottom onClick={handleNextButtonClick} className=" bg-green-button py-2 px-5 rounded-[15px] flex justify-center items-center mx-2 cursor-pointer hover:bg-green">
            <img alt="" src={arrowRight} className="w-[10px]" />
          </bottom>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Navigation]}
        className="swiper mt-[50px] flex items-start w-[100%] overflow-x-auto scrollbar"
      >
        {propertyHouse?.map((data) => (
          <SwiperSlide key={data.id} className="w-[300px] mr-5">
            <div className="relative mb-[10px]">
              <img
                alt={data.picture.alt}
                src={data.picture.url}
                className="w-[100%]"
              />
              <div className="absolute bottom-2 left-2 py-1 px-2 bg-red-100 flex w-fit rounded-full">
                <img alt="" src={titleHouse} className="w-[10px] mr-1" />
                <p className="text-[15px] text-orange">Popular</p>
              </div>
            </div>
            <div className="mb-[10px]">
              <h1 className="font-bold text-[18px]">{data.name}</h1>
              <p className="font-semibold text-[14px]">$ {data.price}</p>
            </div>
            <div className="flex items-center">
              <img
                alt=""
                src={data.owner.picture}
                className="w-[40px] mr-2 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{data.owner.name}</h3>
                <p className="text-gray text-[15px]">{data.owner.address}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Recommend;
