import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthRegisterMutation } from "../hooks/useMutateData";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Register = () => {
  const authRegisterMutation = useAuthRegisterMutation();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = async (data) => {
    try {
      const result = await authRegisterMutation.mutateAsync(["post", "", data]);
      reset();
      navigate("/login");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2 w-[330px]"
      >
        <div className="mb-10">
          <h1 className="font-bold text-center text-gray-700 text-lg">Register</h1>
          <p className="text-sm text-center">Create your account</p>
        </div>

        <input
          className="border border-gray-400 focus-visible:border-black px-2 rounded-md py-2 outline-none"
          {...register("username", { required: "Username is required" })}
          type="text"
          placeholder="Enter your username"
        />
        {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
        
        <input
          className="border border-gray-400 focus-visible:border-black px-2 rounded-md py-2 outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

        <div className="flex items-center border-gray-400 justify-between border hover:border-black px-2 rounded-md py-2">
          <input
            className="w-full outline-none"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message: "Password must contain at least one number and one special character",
              },
            })}
            type={eye ? "text" : "password"}
            placeholder="Enter your password"
          />
          <div onClick={() => setEye(!eye)}>
            {eye ? <LuEyeOff /> : <LuEye />}
          </div>
        </div>
        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

        <button className="w-full border hover:bg-white hover:text-blue-500 border-blue-500 font-semibold bg-blue-500 text-white mt-4 py-[6px] rounded-md">
          Register
        </button>
        <p className="text-sm text-end">
          Already have an account?{" "}
          <span className="underline cursor-pointer text-blue-700 font-semibold" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
