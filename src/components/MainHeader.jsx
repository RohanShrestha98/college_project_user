import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { PiUser } from "react-icons/pi";
import { useAuthContext } from "../context/authContext";
import { LiaTruckMovingSolid } from "react-icons/lia";

export default function MainHeader() {
  const navigate = useNavigate()
  const { auth } = useAuthContext();

  return (
    <div className="bg-[#1B6392] base_layout py-2">
      <div className="base_padding flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-3 text-white text-2xl">
        <IoSearch size={22}/>
        <LiaTruckMovingSolid className="cursor-pointer" size={20} onClick={()=>navigate("/track-order")}/>
          <FiShoppingCart className="cursor-pointer" size={20} onClick={()=>navigate("/cart")}/>
          <PiUser />
        </div>
      </div>
    </div>
  );
}
