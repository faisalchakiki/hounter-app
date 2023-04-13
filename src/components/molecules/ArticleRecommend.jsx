import React from "react";
import ImageArtikel1 from "../../assets/tricks-image-first.png";
import ImageArtikel2 from "../../assets/tricks-image-second.svg";
import ownerAvatar from "../../assets/owner.svg";
import clock from "../../assets/icons/clock.svg";

function ArticleRecommend() {
  return (
    <div className="flex mt-10 lg:ml-[100px] md:ml-[60px] ml-[30px]">
      <div className="flex-1">
        <div className="flex items-start h-[140px] mb-5">
          <img
            alt=""
            src={ImageArtikel2}
            className="rounded-md w-[30%] h-[140px] mr-5"
          />
          <div className="w-[55%] flex flex-col justify-between items-start h-[100%]">
            <div className="flex items-center">
              <img
                alt=""
                src={ownerAvatar}
                className="w-[35px] mr-4 rounded-full"
              />
              <h3>Brian Michael</h3>
            </div>
            <h2 className="font-semibold">
              The best way to know the quality of the house we want to buy
            </h2>
            <div className="flex items-center">
              <img alt="" src={clock} className="w-[20px] mr-2" />
              <p className="text-gray">2 min read | 24 Apr 2021</p>
            </div>
          </div>
        </div>
        <div className="flex items-start h-[140px] mb-5">
          <img
            alt=""
            src={ImageArtikel1}
            className="rounded-md w-[30%] h-[140px] mr-5"
          />
          <div className="w-[55%] flex flex-col justify-between items-start h-[100%]">
            <div className="flex items-center">
              <img
                alt=""
                src={ownerAvatar}
                className="w-[35px] mr-4 rounded-full"
              />
              <h3>Brian Michael</h3>
            </div>
            <h2 className="font-semibold">
              The best way to know the quality of the house we want to buy
            </h2>
            <div className="flex items-center">
              <img alt="" src={clock} className="w-[20px] mr-2" />
              <p className="text-gray">2 min read | 24 Apr 2021</p>
            </div>
          </div>
        </div>
        <div className="flex items-start h-[140px]">
          <img
            alt=""
            src={ImageArtikel2}
            className="rounded-md w-[30%] h-[140px] mr-5"
          />
          <div className="w-[55%] flex flex-col justify-between items-start h-[100%]">
            <div className="flex items-center">
              <img
                alt=""
                src={ownerAvatar}
                className="w-[35px] mr-4 rounded-full"
              />
              <h3>Brian Michael</h3>
            </div>
            <h2 className="font-semibold">
              The best way to know the quality of the house we want to buy
            </h2>
            <div className="flex items-center">
              <img alt="" src={clock} className="w-[20px] mr-2" />
              <p className="text-gray">2 min read | 24 Apr 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-start h-[100%]">
          <img
            alt=""
            src={ImageArtikel1}
            className="rounded-md w-[80%] h-[250px]"
          />
          <div className="w-[80%] py-2 flex flex-col justify-between items-start h-[100%]">
            <div className="flex items-center">
              <img
                alt=""
                src={ownerAvatar}
                className="w-[35px] mr-4 rounded-full"
              />
              <h3>Brian Michael</h3>
            </div>
            <h2 className="font-semibold">
              The best way to know the quality of the house we want to buy
            </h2>
            <p className="text-gray">
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </p>
            <div className="flex items-center">
              <img alt="" src={clock} className="w-[20px] mr-2" />
              <p className="text-gray">2 min read | 24 Apr 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleRecommend;
