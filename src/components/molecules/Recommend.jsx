import React from "react";
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

  return (
    <div className="mt-[50px] flex items-start w-[100%] overflow-x-auto scrollbar">
      {propertyHouse?.map((data) => (
        <div key={data.id} className="box w-[300px] mr-5">
          <div className="relative mb-[10px]">
            <img
              alt={data.picture.alt}
              src={data.picture.url}
              className="w-[100%]"
            />
            <div className="absolute bottom-2 left-2 py-1 px-2 bg-red-100 flex w-fit text-orange rounded-full">
              <img alt="" src={titleHouse} className="w-[10px] mr-1" />
              <p className="text-[15px]">Popular</p>
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
        </div>
      ))}
    </div>
  );
}

export default Recommend;
