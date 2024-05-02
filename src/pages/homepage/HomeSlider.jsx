import Slider from "react-slick";
import banner1 from "../../assets/banner/banner1.png"
import banner2 from "../../assets/banner/banner2.png"
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



export default function HomeSlider() {
  const arrowRef = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const number = [];
  for (let i = 0; i <= 10; i++) {
    number.push({
      value: i,
    });
  }

  const bannerList = [
    {
        id:"1",
        img:banner1
    },
    {
        id:"2",
        img:banner2
    },
  ]
  return (
    <div className="w-full slider-container relative">
      <Slider  ref={arrowRef}  {...settings}>
        {bannerList?.map((item) => {
          return (
            <div key={item?.id} className=" outline-none">
              <div className=" h-96 ">
                <img src={item?.img} className="h-full object-cover w-full" alt="" />
              </div>
            </div>
          );
        })}
      </Slider>

      <button
        onClick={() => arrowRef.current.slickPrev()}
        className=" w-8 h-8 absolute top-[48%] ml-2 bg-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-blue-600 flex items-center justify-center focus:outline-none"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => arrowRef.current.slickNext()}
        className="absolute top-[48%] mr-2  right-0 w-8 h-8 bg-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-blue-600 flex items-center justify-center focus:outline-none"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
