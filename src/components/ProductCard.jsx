import React from 'react'
import { FaStar } from 'react-icons/fa'
import product from "../assets/products/product3.png"
import {useNavigate} from 'react-router-dom'

export default function ProductCard({item}) {
  const navigate = useNavigate()
  return (
    <div  onClick={()=>navigate("/product-details",{state:{item}})}
                    key={item?.id}
                    className="border px-3 py-2 flex hover:shadow-lg cursor-pointer flex-col gap-2"
                  >
                    <img
                      src={product}
                      className="w-[80%] ml-[10%] my-2"
                      alt=""
                    />
                    <div className="flex items-center gap-1">
                      <FaStar className="text-sm text-yellow-500" />
                      <FaStar className="text-sm text-yellow-500" />
                      <FaStar className="text-sm text-yellow-500" />
                      <FaStar className="text-sm text-yellow-500" />
                      <FaStar className="text-sm text-yellow-500" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h1 className="text-gray-800 line-clamp-2 text-sm font-normal">
                        {item?.name}
                      </h1>
                      <p className="text-blue-500 text-sm font-semibold">
                        ${item?.price}
                      </p>
                    </div>
                  </div>
  )
}
