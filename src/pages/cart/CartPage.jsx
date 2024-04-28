import { MdOutlineCancel } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [selectedCart,setSelectedCart] = useState()

  const existingArrayString = localStorage.getItem("myCart");
  const existingArray = JSON.parse(existingArrayString) || [];

  const navigate = useNavigate()


  const handleRemoveFromCart = ()=>{
    const indexToRemove = existingArray.findIndex(obj => obj._id === existingArray?._id);
    if (indexToRemove !== -1) {
      existingArray.splice(indexToRemove, 1);
      const updatedArrayString = JSON.stringify(existingArray);
      localStorage.setItem('myCart', updatedArrayString);
    }
  }


  return (
    <div className="m-20 flex justify-between">
      <div className="w-2/3">
        <h2 className="text-[#191C1F] text-base font-medium">Shopping Cart</h2>
        <div className=" py-4">
          <table className="w-full">
            <thead>
              <tr className="text-[#475156] bg-[#E4E7E9] text-sm font-normal grid grid-cols-4 gap-10 py-5">
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUB-TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {existingArray?.map((item, index) => (
                <tr key={index} onClick={()=>setSelectedCart(item)} className="grid cursor-pointer grid-cols-4 gap-10 px-2 py-5 items-center">
                  <th className="flex items-center gap-2 text-base font-normal">
                    {/* <MdOutlineCancel
                      fontSize={18}
                      cursor='pointer'
                      className="text-[#929FA5] hover:text-red-700"
                    onClick={()=>handleRemoveFromCart(item?._id)}
                    /> */}
                    <img src={item?.images[0]?.url} alt="product" className="w-10 h-10" />
                    {item?.name}
                  </th>
                  <th className="text-base font-normal">{item?.price}</th>
                  <th className="text-base font-normal">{item?.count}</th>
                  <th className="text-base font-normal">{item?.price * item?.count}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-5">
            <button onClick={()=>navigate("/")} className="text-[#2DA5F3] border border-[#2DA5F3] text-sm px-6 py-2 flex gap-2">
              <IoReturnUpBackOutline color="#2DA5F3" fontSize={18} />
              Return to Shop
            </button>
            <button className="text-[#2DA5F3] border border-[#2DA5F3] text-sm px-6 py-2 flex gap-2">
              UPDATE CART
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col gap-8">
        <div className="border border-[#E4E7E9] px-5 py-2">
          <h2 className="text-[#191C1F] text-base font-medium">Card Total</h2>
          <div className="pt-5 grid grid-cols-1 gap-3">
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Sub Total</p>
              <p className="text-[#191C1F] text-sm">{selectedCart?.price??existingArray?.[0]?.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Shipping</p>
              <p className="text-[#191C1F] text-sm">Free</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Discount</p>
              <p className="text-[#191C1F] text-sm">{selectedCart?.discount??existingArray?.[0]?.discount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Tax</p>
              <p className="text-[#191C1F] text-sm">-</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-[#191C1F] text-sm">Total</p>
              <p className="text-[#191C1F] text-sm">{selectedCart?.price??existingArray?.[0]?.price - existingArray?.[0]?.discount}</p>
            </div>
            <button className="bg-[#FA8232] text-white px-6 py-3 mt-5 text-sm">
              Proceed to Checkout
            </button>
          </div>
        </div >
        <div className="border border-[#E4E7E9] px-5 py-2">
          <h2 className="text-[#191C1F] text-base font-medium">Coupon Code</h2>
          <div className="flex flex-col gap-2 mt-5">
            <input type="text" placeholder="Coupon code" className="px-6 py-4 text-sm border border-[#E4E7E9]" />
            <button className="bg-[#2DA5F3] text-white px-6 py-2">APPLY COUPON</button>
          </div>
        </div>
      </div>
    </div >
  )
}
