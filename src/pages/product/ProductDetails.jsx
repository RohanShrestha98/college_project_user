import { useLocation, useNavigate } from "react-router-dom";
import { IoIosStar, IoMdArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useProductData } from "../../hooks/useQueryData";
import product from "../../assets/products/product1.png";
import { useBuyProductMutation } from "../../hooks/useMutateData";
import BuyNowModal from "./BuyNowModal";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const location = useLocation();
  const productDetails = location?.state?.item;
  console.log("productDetails", productDetails);
  const { data, isLoading, isError } = useProductData();
  const navigate = useNavigate();

  const discountPercentage = (
    (parseInt(productDetails?.discount) / parseInt(productDetails?.price)) *
    100
  ).toFixed(2);
  const [selectedColor, setSelectedColor] = useState("green");
  const [count, setCount] = useState(1);
  const [cartToggle, setCartToggle] = useState(false);
  const [hasAddCart, setHasAddCart] = useState(false);
  const [buyNowModal, setBuyNowModal] = useState(false);

  const color = [
    {
      value: "green",
      label: "Green",
    },
    {
      value: "red",
      label: "Red",
    },
    {
      value: "yellow",
      label: "Yellow",
    },
    {
      value: "blue",
      label: "Blue",
    },
    {
      value: "black",
      label: "Black",
    },
  ];

  const existingArrayString = localStorage.getItem("myCart");
  const existingArray = JSON.parse(existingArrayString) || [];

  console.log("existingArray",existingArray)
  useEffect(()=>{
    const hasAddToCart = existingArray.some(obj => obj._id === productDetails?._id);
    console.log("hasAddToCart",hasAddToCart)
    setHasAddCart(hasAddToCart)
  },[cartToggle])
  

  const handleAddToCart = (newObject) => {
    existingArray.push(newObject);
    const updatedArrayString = JSON.stringify(existingArray);
    localStorage.setItem("myCart", updatedArrayString);
    setCartToggle(!cartToggle)
  };

  const handleRemoveFromCart = ()=>{
    const indexToRemove = existingArray.findIndex(obj => obj._id === productDetails?._id);
    if (indexToRemove !== -1) {
      existingArray.splice(indexToRemove, 1);
      const updatedArrayString = JSON.stringify(existingArray);
      localStorage.setItem('myCart', updatedArrayString);
      setCartToggle(!cartToggle)
    }
  }

  const buyProdcutMutation = useBuyProductMutation()

    const onSubmitHandler = async () => {
      const postData = {...productDetails,color:selectedColor,count:count,status:"pending"}
      try {
        const result = await buyProdcutMutation.mutateAsync(["post", "create/", postData]);
        setBuyNowModal(false)
        toast.success("Product order successfully")
      } catch (error) {
        console.log("error", error?.response?.data?.errors?.error);
      }
    };

  
  return (
    <div className="base_layout ">
      <div className="base_padding flex flex-col gap-10">
        <div className="flex  justify-between gap-10 my-6 h-[400px]">
          <div className="flex w-2/5 flex-col gap-2 h-full">
            <div className="border p-6 h-full flex justify-center">
              <img
                src={productDetails?.images?.[0]?.url}
                className="h-[360px] object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="flex gap-1 text-[#FA8232]">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
              </div>
              <p className="text-[#191C1F] font-semibold">4.7 Star Rating</p>
            </div>
            <h1 className="text-[#191C1F] text-xl">{productDetails?.name}</h1>
            <div className="flex gap-2 text-sm">
              <p className="text-[#5F6C72] ">Availability :</p>
              <p
                className={`font-semibold ${
                  productDetails?.inStock ? "text-[#2DB224]" : "text-red-600"
                }`}
              >
                {productDetails?.inStock ? "In Stock" : "Out of stock"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {productDetails?.categoryField?.map((item) => {
                console.log("item", item);
                return (
                  <div key={item?.id} className="flex gap-2 text-sm">
                    <p className="text-[#5F6C72] ">{item?.name} :</p>
                    <p className="text-[#191C1F] font-semibold">
                      {item?.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center text-lg gap-2">
              <p className="text-[#2DA5F3]">
                Rs{" "}
                {parseInt(productDetails?.price) -
                  parseInt(productDetails?.discount)}
              </p>
              <p className="text-[#77878F] text-base line-through">
                Rs {parseInt(productDetails?.price)}
              </p>
              <p className="text-[#191C1F] text-sm px-3 ml-2 py-1 font-semibold bg-[#EFD33D]">
                {discountPercentage} %
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <p className="text-[#5F6C72] ">Brand :</p>
              <p className="text-[#191C1F] font-semibold">
                {productDetails?.brand}
              </p>
            </div>
            <h1 className="font-semibold">Choose color</h1>
            <div className="flex items-center gap-2">
              {color?.map((item) => {
                return (
                  <div
                    onClick={() => setSelectedColor(item?.value)}
                    className={` ${
                      item?.value === selectedColor &&
                      " border-[3px] border-blue-950 "
                    }  h-8 cursor-pointer  w-8 rounded-full ${
                      item?.value === "red"
                        ? "bg-red-500"
                        : item?.value === "green"
                        ? "bg-green-500"
                        : item?.value === "blue"
                        ? "bg-blue-500"
                        : item?.value === "yellow"
                        ? "bg-yellow-500"
                        : "bg-black"
                    }`}
                    key={item?.id}
                  ></div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="py-1 border-2 flex items-center justify-evenly gap-4 px-4">
                <p
                  className="cursor-pointer px-[10px] border rounded-full text-2xl hover:bg-gray-100"
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </p>
                <p>{count}</p>
                <p
                  className="cursor-pointer px-[10px] border rounded-full text-2xl hover:bg-gray-100"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </p>
              </div>
              <div
                onClick={() =>{hasAddCart ? handleRemoveFromCart(): handleAddToCart({...productDetails,color:selectedColor,count:count,status:"pending"})}}
                className="px-10 py-2 h-full hover:opacity-75 cursor-pointer flex items-center gap-2 bg-[#FA8232] text-white"
              >
                <p className="uppercase">{hasAddCart ? "Remove from":"Add to"} card</p>
                <LuShoppingCart />
              </div>
              <div onClick={()=>setBuyNowModal(true)} className="h-full px-5 border-[3px] cursor-pointer hover:bg-[#FA8232] hover:text-white flex items-center border-[#FA8232] text-[#FA8232]">
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center  justify-between ">
            <h1 className="text-gray-900 font-semibold text-xl">
              Recommended Products
            </h1>
            <h2 className="text-blue-600 flex items-center gap-1 cursor-pointer text-sm font-semibold">
              Browse All Product <IoMdArrowForward />
            </h2>
          </div>
          <div className="  grid grid-cols-5 gap-4 mt-4 ">
            {data?.data?.map((item) => {
              return (
                <div
                  onClick={() =>
                    {setCartToggle(!cartToggle)
                      navigate("/product-details", { state: { item } })}
                  }
                  key={item?.id}
                  className="border border-gray-100 p-2 hover:bg-blue-50"
                >
                  <img
                    src={item?.images?.[0]?.url ?? product}
                    className="w-[80%] h-[160px] object-contain p-4 ml-[10%]"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 line-clamp-2 text-sm font-normal">
                      {item?.name}
                    </h1>
                    <p className="text-blue-500 text-sm font-semibold">
                      ${item?.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {buyNowModal && <BuyNowModal isOpen={buyNowModal} setIsOpen={setBuyNowModal} onSubmitHandler={onSubmitHandler}/>}
    </div>
  );
}
