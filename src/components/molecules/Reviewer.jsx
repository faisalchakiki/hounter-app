import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import review from "../../assets/review-image.png";
import ownerAvatar from "../../assets/owner.svg";
import starReview from "../../assets/icons/star.svg";

function Reviewer() {
  return (
    <main className="mt-10 flex justify-center items-start">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide className="w-[50%] relative flex justify-center pb-[150px]">
            <img alt="reviewer-house" src={review} className="w-full" />
            <div className="absolute w-[80%] p-5 bg-white rounded-lg bottom-10 shadow-md">
              <h3 className="text-[#1B1C57] text-[20px] mb-2 font-semibold">
                Best! I got the house I wanted through Hounter
              </h3>
              <p className="text-gray">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
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
                <div className="flex items-center ml-auto">
                  <img alt="" src={starReview} className="w-[25px] mr-3" />
                  <p className="font-bold text-[20px]">4.6</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[50%] relative flex justify-center pb-[150px]">
            <img alt="reviewer-house" src={review} className="w-full" />
            <div className="absolute w-[80%] p-5 bg-white rounded-lg bottom-10 shadow-md">
              <h3 className="text-[#1B1C57] text-[20px] mb-2 font-semibold">
                Best! I got the house I wanted through Hounter
              </h3>
              <p className="text-gray">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
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
                <div className="flex items-center ml-auto">
                  <img alt="" src={starReview} className="w-[25px] mr-3" />
                  <p className="font-bold text-[20px]">4.6</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[50%] relative flex justify-center pb-[150px]">
            <img alt="reviewer-house" src={review} className="w-full" />
            <div className="absolute w-[80%] p-5 bg-white rounded-lg bottom-10 shadow-md">
              <h3 className="text-[#1B1C57] text-[20px] mb-2 font-semibold">
                Best! I got the house I wanted through Hounter
              </h3>
              <p className="text-gray">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
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
                <div className="flex items-center ml-auto">
                  <img alt="" src={starReview} className="w-[25px] mr-3" />
                  <p className="font-bold text-[20px]">4.6</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default Reviewer;
