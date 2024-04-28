import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { PiUser } from "react-icons/pi";

export default function MainHeader() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#1B6392] base_layout py-2">
      <div className="base_padding flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex bg-white w-1/3 items-center rounded-sm px-2 h-9">
          <input
            type="text"
            placeholder="Search for anything ..."
            className="w-full h-full px-2 text-sm border-none bg-transparent outline-none"
          />
          <CiSearch size={20} />
        </div>
        <div className="flex items-center gap-6 text-white text-2xl">
          <FiShoppingCart onClick={()=>navigate("/cart")}/>
          <FaRegHeart />
          <PiUser />
        </div>
      </div>
    </div>
  );
}
