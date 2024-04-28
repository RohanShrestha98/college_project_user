import { MdOutlineCancel } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([])
  console.log(cart[0]?.price)

  useEffect(() => {
    const existingArrayString = localStorage.getItem("myCart");
    const existingArray = JSON.parse(existingArrayString) || [];
    setCart(existingArray)
  }, []);

  const removeCart = (id) => {
    let filtered = cart.filter(item => item._id !== id);
    setCart(filtered)
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
              {cart?.map((item, index) => (
                <tr className="grid grid-cols-4 gap-10 px-2 py-5 items-center">
                  <th className="flex items-center gap-2 text-base font-normal">
                    <MdOutlineCancel
                      fontSize={18}
                      cursor='pointer'
                      className="text-[#929FA5] hover:text-red-700"
                    // onClick={removeCart(id)}
                    />
                    <img src={item.images[0].url} alt="product" className="w-10 h-10" />
                    {item.name}
                  </th>
                  <th className="text-base font-normal">{item.price}</th>
                  <th className="text-base font-normal">{item.count}</th>
                  <th className="text-base font-normal">{item.price * item.count}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-5">
            <button className="text-[#2DA5F3] border border-[#2DA5F3] text-sm px-6 py-2 flex gap-2">
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
              <p className="text-[#191C1F] text-sm">{cart[0]?.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Shipping</p>
              <p className="text-[#191C1F] text-sm">Free</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Discount</p>
              <p className="text-[#191C1F] text-sm">{cart[0]?.discount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Tax</p>
              <p className="text-[#191C1F] text-sm">-</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-[#191C1F] text-sm">Total</p>
              <p className="text-[#191C1F] text-sm">{cart[0]?.price - cart[0]?.discount}</p>
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
