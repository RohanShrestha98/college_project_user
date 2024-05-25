import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import InputField from "../../components/ui/InputField";
import { useForm } from "react-hook-form";
import { useBuyProductMutation } from "../../hooks/useMutateData";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Billing() {
  const navigate = useNavigate()
  const location = useLocation()
  const {register,watch} = useForm()
  const {auth} = useAuthContext()
  const orderData = location?.state
  const [userDetails,setUserDetails] = useState(localStorage.getItem('details'))

  useEffect(() => {
    // Load todos from localStorage when the component mounts
    const details = JSON.parse(localStorage.getItem('details'));
    if (details) {
      setUserDetails(details);
    }
  }, []);

  const buyProdcutMutation = useBuyProductMutation()

  const handlePlaceOrder = async () => {
    const postData = {userDetails:{...watch()},...orderData,status:"pending"}
    try {
      const result = await buyProdcutMutation.mutateAsync(["post", "create/", postData]);
      toast.success("Product order successfully")
      localStorage.setItem('details', JSON.stringify(watch()));
      navigate("/track-order")
    } catch (error) {
      console.log("error", error?.response?.data?.errors?.error);
    }
  };

  return (
    <div className="m-20 mt-10 flex justify-between">
      <form className="w-2/3 flex flex-col gap-4">
        <h1 className="font-semibold text-lg">Billing Information</h1>
        <div className="grid grid-cols-3 gap-2">
          <InputField defaultValue={userDetails?.firstName} register={register} registerName={"firstName"} required label={"First Name"} placeholder={"Enter your first name"}/>
          <InputField defaultValue={userDetails?.middleName} register={register} registerName={"middleName"}  label={"Middle Name"} placeholder={"Enter your middle name"}/>
          <InputField defaultValue={userDetails?.lastName} register={register} registerName={"lastName"} required label={"Last Name"} placeholder={"Enter your last name"}/>
          </div>
          <div className="grid grid-cols-3 gap-2">
          <InputField defaultValue={userDetails?.city} register={register} registerName={"city"} required label={"City"} placeholder={"Enter your city"}/>
          <InputField defaultValue={userDetails?.address} register={register} registerName={"address"} required  label={"Address"} placeholder={"Enter your address"}/>
          <InputField defaultValue={userDetails?.zipCode} register={register} registerName={"zipCode"}  label={"Zip Code"} placeholder={"Enter your zip code"}/>
        </div>
          <div className="grid grid-cols-2 gap-2">
          <InputField  register={register} disabled registerName={"email"} defaultValue={auth?.user?.email} required label={"Email"} placeholder={"Enter your email"}/>
          <InputField defaultValue={userDetails?.phome} register={register} registerName={"phome"} required  label={"Phone no"} placeholder={"Enter your phone number"}/>
        </div>
        <h1 className="font-semibold text-lg mt-4">Additional Information</h1>
        <div className="flex flex-col gap-1">
        <p className="text-gray-800 font-semibold text-sm">Order Notes (Optional)</p>
        <textarea defaultValue={userDetails?.additionalInformation} placeholder="Notes about your order, e.g. special notes for delivery" cols="30" className="border focus-visible:border-gray-700 outline-none p-4 text-sm" rows="6" {...register("additionalInformation")}></textarea>
        </div>
        
      </form>
      <div className="w-1/4 flex flex-col gap-8">
        <div className="border border-[#E4E7E9] px-5 py-3">
          <h2 className="text-[#191C1F] text-base font-medium">Order Summery</h2>
          <div className="flex gap-1 border mt-1 p-1 rounded-md">
            <img src={orderData?.images?.[0]?.url} className="w-[24%]" alt="" />
            <div className="w-full flex flex-col justify-center">
              <h1 className="text-gray-700 font-semibold text-sm line-clamp-1">{orderData?.name}</h1>
              <div className="flex items-center gap-1">
              <p className="text-gray-500 text-sm">{orderData?.count} * </p>
              <p className="text-[#2DA5F3] text-sm">Rs {orderData?.price - orderData?.discount}</p>
              </div>
            </div>
          </div>
          <div className="pt-5 grid grid-cols-1 gap-3">
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Sub Total</p>
              <p className="text-[#191C1F] text-sm">Rs {orderData?.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Shipping</p>
              <p className="text-[#191C1F] text-sm">Free</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Discount</p>
              <p className="text-[#191C1F] text-sm"> Rs {orderData?.discount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5F6C72] text-sm">Quantity</p>
              <p className="text-[#191C1F] text-sm">{orderData?.count}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-[#191C1F] text-sm">Total</p>
              <p className="text-[#191C1F] text-sm">Rs {orderData?.count * (orderData?.price - orderData?.discount)}</p>
            </div>
            <button onClick={()=>handlePlaceOrder()} className="bg-[#FA8232] text-white px-6 py-3 mt-5 text-sm">
              Place Order
            </button>
          </div>
        </div >
      </div>
    </div >
  )
}
