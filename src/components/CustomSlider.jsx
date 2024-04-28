import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import product from "../assets/products/product2.png";
import { useCategoryData } from "../hooks/useQueryData";


export default function CustomSlider() {
  const arrowRef = useRef();
  const {data} = useCategoryData()

  console.log("data",data?.data)

  const settings = {
    className: "activeSlider",
    infinite: true,
    autoPlay: true,
    slidesToShow: 7,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const number = [];
  for (let i = 0; i <= 10; i++) {
    number.push({
      img: product,
    });
  }

  return (
    <div className="slider-container relative">
      <Slider ref={arrowRef} {...settings}>
        {data?.data?.map((item) => {
          return (
            <div
              key={item?.value}
              className="flex justify-center  px-2 outline-none  "
            >
              <div className=" overflow-hidden  min-w-[142px] border py-3 px-4">
                <img
                  src={item?.thumbnail?.url??product}
                  className="min-h-[136px] w-full p-4  object-cover object-center z-50"
                  alt={item?.thumbnail?.url}
                />
                <p className="text-gray-900 mt-2 font-semibold text-base text-center">
                  {item?.title}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <button
        onClick={() => arrowRef.current.slickPrev()}
        className=" w-8 h-8 absolute top-[42%]  -ml-2 bg-[#FA8232] hover:bg-[#faa267] rounded-full text-white flex items-center justify-center focus:outline-none"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => arrowRef.current.slickNext()}
        className="absolute top-[42%]   right-0 -mr-3 w-8 h-8 bg-[#FA8232] hover:bg-[#faa267] rounded-full text-white flex items-center justify-center focus:outline-none"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
