import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { PiUser } from "react-icons/pi";
import { useAuthContext } from "../context/authContext";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { useState } from "react";
import { toast } from "react-toastify";
import { MdClear } from "react-icons/md";

export default function MainHeader() {
  const navigate = useNavigate()
  const { auth } = useAuthContext();
  const [logout,setLogout] = useState(false)
  const [searchToggle,setSearchToggle] = useState(false)
  const [searchText,setSearchText] = useState("")
  const handleLogout = ()=>{
    toast.success("Logout successfull")
    navigate("/login")
  }
  const handleSearch =()=>{
    navigate("/products",{state:searchText})
    setSearchToggle(!searchToggle)
  }

  return (
    <div className="bg-[#1B6392] base_layout py-2">
      <div className="base_padding flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-3 relative text-white text-2xl">
          {
            searchToggle && <div className="flex rounded-full items-center justify-between border px-4 py-1  hover:border-black bg-gray-200">
            <input type="text" className="outline-none bg-transparent text-black h-6 text-sm w-full " placeholder="Enter search text" onChange={(e)=>setSearchText(e.target.value)} />
            {
                searchText &&  <MdClear className="cursor-pointer text-gray-700" onClick={()=>{setSearchText("")
                setSearchToggle(!searchToggle)
                }}/>
              }
            </div>
          }
          
        <IoSearch size={22} className="cursor-pointer" onClick={()=>{searchToggle?handleSearch():setSearchToggle(!searchToggle)}}/>
        <LiaTruckMovingSolid className="cursor-pointer" size={20} onClick={()=>navigate("/track-order")}/>
          <FiShoppingCart className="cursor-pointer" size={20} onClick={()=>navigate("/cart")}/>
          <PiUser onClick={()=>setLogout(!logout)}/>
          {
            logout && <div onClick={()=>handleLogout()} className="absolute cursor-pointer text-sm px-4 py-2 text-red-600 mt-20 shadow-md right-0 z-10 bg-white hover:bg-gray-100 ">
              Logout
            </div>
          }
        </div>
      </div>
    </div>
  );
}
