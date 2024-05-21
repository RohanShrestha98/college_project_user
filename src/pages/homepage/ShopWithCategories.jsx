import CustomSlider from "../../components/CustomSlider";
import discountBanner from "../../assets/banner.png";
import { IoMdArrowForward } from "react-icons/io";
import ProductCard from "../../components/ProductCard";
import { useCategoryData, useProductData } from "../../hooks/useQueryData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShopWithCategories() {
  const featureProduct = [
    {
      id: 1,
      name: "All Product",
    },
    {
      id: 1,
      name: "Smart Phone",
    },
    {
      id: 1,
      name: "Laptop",
    },
    {
      id: 1,
      name: "Headphone",
    },
    {
      id: 1,
      name: "TV",
    },
  ];
  const {data:categoryData} = useCategoryData()
  const [selectedCategory,setSelectedCategory] = useState("")
  const { data, loading, error } = useProductData(selectedCategory)
  const navigate = useNavigate()

  const filterData = data?.data?.filter(item => item?.isRohan)



  return (
    <div className="base_layout mb-10">
      <div className="base_padding flex flex-col gap-6">
        <h1 className="text-gray-900 text-center mb-4 font-boldd text-3xl">
          Shop with Categorys
        </h1>
        <CustomSlider />
        <div className="flex justify-center gap-4">
          <div className="w-1/5">
            <img src={discountBanner} className="w-full h-full" alt="" />
          </div>
          <div className="w-4/5">
            <div className="flex items-center mb-2 justify-between">
              <h1 className="text-lg font-semibold text-gray-900">
                Featured Products
              </h1>
              <div className="flex items-center gap-2">
              <div>
                      <p className={`text-sm cursor-pointer hover:text-[#FA8232] ${selectedCategory === "" ?"text-[#FA8232]":"" }`} onClick={()=>setSelectedCategory("")}>All Products</p>
                    </div>
                {categoryData?.data?.slice(0,4)?.map((item) => {
                  return (
                    <div key={item?._id} onClick={()=>setSelectedCategory(item?._id)}>
                      <p className={`text-sm cursor-pointer hover:text-[#FA8232]  ${selectedCategory === item?._id ?"text-[#FA8232]":"" }`}>{item?.title}</p>
                    </div>
                  );
                })}
                <p onClick={()=>navigate("/products")} className="text-[#FA8232] text-sm cursor-pointer ml-1 flex items-center gap-1">
                  Browse All Product <IoMdArrowForward />
                </p>
              </div>
            </div>
            {
              filterData && <div className="grid grid-cols-4 gap-4">
              {filterData?.slice(0,8)?.map((item) => {
                return <ProductCard key={item?.id} item={item} />;
              })}
            </div>
            }
            {
              loading && <>Loading...</>
            }
            {
              filterData?.length === 0 && <>Empty</>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
