import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { PiUser } from "react-icons/pi";
import { useAuthContext } from "../context/authContext";

export default function MainHeader() {
  const navigate = useNavigate()
  const { auth } = useAuthContext();

  return (
    <div className="bg-[#1B6392] base_layout py-2">
      <div className="base_padding flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-4 text-white text-2xl">
        <IoSearch size={22}/>
          <FiShoppingCart className="cursor-pointer" size={20} onClick={()=>navigate("/cart")}/>
          <PiUser />
        </div>
      </div>
    </div>
  );
}
