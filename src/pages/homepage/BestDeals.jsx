import { IoMdArrowForward } from "react-icons/io";
import product from "../../assets/products/product1.png";
import { useProductData } from "../../hooks/useQueryData";
import { useNavigate } from "react-router-dom";

export default function BestDeals() {
  const { data, isLoading, isError } = useProductData()
  const navigate = useNavigate()
  const filterData = data?.data?.filter(item => item?.isRohan)
  return (
    <div className="base_layout my-10 w-screen">
      <div className="flex items-center base_padding justify-between ">
        <div className="flex items-center gap-3">
          <h1 className="text-gray-900 font-semibold text-xl">Best Deals</h1>
          <p className="text-gray-400 text-sm">Deals ends in</p>
        </div>
        <h2 onClick={()=>navigate("/products")} className="text-blue-600 flex items-center gap-1 cursor-pointer text-sm font-semibold">
          Browse All Product <IoMdArrowForward />
        </h2>
      </div>
      <div className=" base_padding grid grid-cols-5 mt-4 ">
        {filterData?.map((item) => {
          return (
            <div onClick={() => navigate("/product-details", { state: { item } })} key={item?.id} className="border border-gray-100 p-2 hover:bg-blue-50">
              <img src={item?.images?.[0]?.url ?? product} className="w-[80%] h-[160px] object-contain p-4 ml-[10%]" alt="" />
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
  );
}
