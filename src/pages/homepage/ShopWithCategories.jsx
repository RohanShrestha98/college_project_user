import CustomSlider from "../../components/CustomSlider";
import discountBanner from "../../assets/banner.png";
import { IoMdArrowForward } from "react-icons/io";
import ProductCard from "../../components/ProductCard";
import { useProductData } from "../../hooks/useQueryData";

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
  const productList = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
    },
  ];
  const { data, isLoading, isError } = useProductData()

  console.log("data", data?.data)
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
                {featureProduct?.map((item) => {
                  return (
                    <div key={item?.id}>
                      <p className="text-sm cursor-pointer">{item?.name}</p>
                    </div>
                  );
                })}
                <p className="text-[#FA8232] text-sm cursor-pointer ml-1 flex items-center gap-1">
                  Browse All Product <IoMdArrowForward />
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {filterData?.map((item) => {
                return <ProductCard key={item?.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
