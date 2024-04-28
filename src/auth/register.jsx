import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {  useAuthRegisterMutation } from "../hooks/useMutateData";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Register = () => {
  const authRegisterMutation = useAuthRegisterMutation();

  const navigate = useNavigate();
  const [eye,setEye] = useState(false)

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = async (data) => {
    try {
      const result = await authRegisterMutation.mutateAsync(["post", "", data]);
        reset();
        navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2  w-[330px]"
      >
        <div className="mb-10">
        <h1 className="font-bold text-center text-gray-700 text-lg">Register</h1>
        <p className="text-sm text-center">Create your account</p>
        </div>

        <input
          className="border border-gray-400 focus-visible:border-black px-2 rounded-md  py-2 outline-none"
          {...register("username")}
          type="text"
          placeholder="Enter your username"
        />
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
        <button className="w-full border hover:bg-white hover:text-blue-500 border-blue-500 font-semibold bg-blue-500 text-white mt-4 py-[6px] rounded-md">Register</button>
        <p className="text-sm text-end">Already have account <span className="underline cursor-pointer text-blue-700 font-semibold" onClick={()=>navigate("/login")}>login</span></p>
      </form>
    </div>
  );
};

export default Register;
