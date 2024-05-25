import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthMutation } from "../hooks/useMutateData";
import { useAuthContext } from "../context/authContext";
import Cookies from "universal-cookie";
import { encryptData } from "../utils/crypto";
import { useState } from "react";
// import Button from "../components/UI/Button";
// import InputField from "../components/UI/InputField";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";

const Login = () => {
  const { setAuth } = useAuthContext();
  const authMutation = useAuthMutation();
  const navigate = useNavigate();
  const cookies = new Cookies({ path: "/" });
  const [eye,setEye] = useState(false)

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = async (data) => {
    try {
      const result = await authMutation.mutateAsync(["post", "", data]);
      if (result?.success) {
        const userDetailsData = {
          accessToken: result?.accessToken,
          user: {
            id: result?.data?.id,
            email: result?.data?.email,
            username: result?.data?.username || "",
          },
        };
        toast.success("login successfull")
        setAuth(userDetailsData);
        cookies.set("accessToken", encryptData(result?.accessToken));
        cookies.set("userDetails", encryptData(userDetailsData));
        reset();
        navigate("/");
      } else {
        console.log("error", result?.response?.data?.errors?.error.toString());
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2  w-[330px] "
      >
        <div className="mb-10">
        <h1 className="font-bold text-center text-gray-700 text-lg">Login</h1>
        <p className="text-sm text-center">Please login into your account</p>
        </div>

        <input
          className="border border-gray-400 focus-visible:border-black px-2 rounded-md  py-2 outline-none"
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        <div className="flex items-center border-gray-400 justify-between border hover:border-black px-2 rounded-md  py-2">

        <input
          className="w-full outline-none"
          {...register("password")}
          type={eye?"text":"password"}
          placeholder="Enter your password"
        />
        <div onClick={()=>setEye(!eye)}>
        {
          eye ? <LuEyeOff /> :<LuEye />
        }
        </div>
        
        
        </div>
        <button className="w-full border hover:bg-white hover:text-blue-500 border-blue-500 font-semibold bg-blue-500 text-white mt-4 py-[6px] rounded-md">Login</button>
        <p className="text-sm text-end">Don't have account <span className="underline cursor-pointer text-blue-700 font-semibold" onClick={()=>navigate("/register")}>register</span></p>
      </form>
    </div>
  );
};

export default Login;
