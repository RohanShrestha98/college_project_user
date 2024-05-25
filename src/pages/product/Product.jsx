import { useState } from "react"
import { useCategoryData, useProductData } from "../../hooks/useQueryData"
import ProductCard from "../../components/ProductCard"
import { MdClear } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const location = useLocation()
  const [searchText,setSearchText] =useState(location?.state??"")
  const {data:categoryData} = useCategoryData()
  const [minPrice,setMinPrice] = useState("0")
  const [maxPrice,setMaxPrice] = useState("100000000")
  const {data,loading,error} = useProductData(selectedCategory,searchText)
  const filterData = data?.data?.filter(item => item?.isRohan && parseInt(item?.price) >= parseInt(minPrice)&& parseInt(item?.price) <= parseInt(maxPrice) && item.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="base_layout py-8">
      <div className="base_padding flex gap-6 justify-between">
        <div className="w-1/4 border  py-4 px-6">
          <div>
          <h1 className="font-semibold mb-4 text-lg">Category</h1>
          <div className="flex flex-col gap-2">
          <div  onClick={()=>setSelectedCategory("")} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" className="text-[#FA8232]" checked={selectedCategory === ""} />
                  <p>All</p>
                </div>
            {
              categoryData?.data?.map((item)=>{
                return <div key={item?._id} onClick={()=>setSelectedCategory(item?._id)} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" className="text-[#FA8232]" checked={selectedCategory === item?._id} />
                  <p>{item?.title}</p>
                </div>
              })
            }
          </div>
          </div>
          <div>
          <h1 className="font-semibold my-4 text-lg">Price Range</h1>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-semibold text-gray-600">Min Price</h1>
              <input onChange={(e)=>setMinPrice(e.target.value)}  type="number" placeholder="Enter min price" className="border outline-none focus-visible:border-gray-700 w-full px-2 py-1"/>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className="text-sm font-semibold text-gray-600">Max Price</h1>
              <input onChange={(e)=>setMaxPrice(e.target.value)}  type="number" placeholder="Enter max price" className="border outline-none focus-visible:border-gray-700 w-full px-2 py-1"/>
            </div>
          </div>
          
        </div>
        <div className="w-3/4 border p-4">
        <div className="flex items-center justify-end ">
            <div className="flex items-center justify-between border w-[300px] bg-gray-50 mb-4 px-2 py-[6px] focus-visible:border-gray-600 ">
            <input type="text" placeholder="Enter search query" className="outline-none text-sm w-full bg-transparent" onChange={(e)=>setSearchText(e.target.value)} />
            {
              searchText &&  <MdClear className="cursor-pointer" onClick={()=>setSearchText("")}/>
            }
           
            </div>
          </div>
        {
              filterData && <div className="grid grid-cols-4 gap-4">
              {filterData?.map((item) => {
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
  )
}
