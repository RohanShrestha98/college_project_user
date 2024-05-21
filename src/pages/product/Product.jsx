import { useState } from "react"
import { useCategoryData, useProductData } from "../../hooks/useQueryData"
import ProductCard from "../../components/ProductCard"
import { MdClear } from "react-icons/md";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchText,setSearchText] =useState("")
  const {data:categoryData} = useCategoryData()
  const {data,loading,error} = useProductData(selectedCategory,searchText)
  const filterData = data?.data?.filter(item => item?.isRohan)

  return (
    <div className="base_layout py-8">
      <div className="base_padding flex gap-6 justify-between">
        <div className="w-1/4 border h-[500px] py-4 px-6">
          <h1 className="font-semibold mb-4 text-lg">Category</h1>
          <div className="flex flex-col gap-2">
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
        <div className="w-3/4 border h-[500px]">
          <div className="flex items-center">
            <div className="flex items-center justify-between border w-[300px] bg-gray-100 my-2 px-2 py-[2px] focus-visible:border-gray-600 ">
            <input type="text" placeholder="Enter search query" className="outline-none w-full bg-transparent" onChange={(e)=>setSearchText(e.target.value)} />
            {
              searchText &&  <MdClear />
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
