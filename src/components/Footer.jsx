import React from 'react'
import logoDark from '../assets/logoDark.svg'
import { FaArrowRight } from "react-icons/fa6";
import googlePlay from '../assets/google-play.png'
import appStore from '../assets/app-store.png'

const footerLinks1 = [
    { name: 'Computer & Laptop' },
    { name: 'SmartPhone' },
    { name: 'Headphone' },
    { name: 'Accessories' },
    { name: 'Camera & Photo' },
    { name: 'TV & Homes' },
]
const footerLinks2 = [
    { name: 'Shop Product' },
    { name: 'Shoping Cart' },
    { name: 'Wishlist' },
    { name: 'Compare' },
    { name: 'Track Order' },
    { name: 'Customer Help' },
    { name: 'About Us' },
]

const tags = [{ name: "game" }, { name: "iPhone" }, { name: "Tv" }, { name: "Laptops" }, { name: "Speaker" }];

const Footer = () => {
    return (
        <div className='bg-[#191C1F] text-white px-24 py-10'>
            <div className='grid grid-cols-5 gap-20'>
                <div>
                    <img src={logoDark} alt="logo" />
                    <div className='flex flex-col gap-2 mt-5'>
                        <p className='text-[#77878F] font-normal text-sm'>Customer Supports:</p>
                        <p className='text-base font-medium'>(629) 555-0129</p>
                        <p className='text-[#77878F] font-normal text-sm'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        <p className='text-base font-medium'>info@kinbo.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-base font-medium'>TOP CATEGORY</h2>
                    <div className='mt-5'>
                        {footerLinks1.map((item, index) => (
                            <p
                                key={index}
                                className='text-[#77878F] font-normal text-sm py-2 cursor-pointer'
                            >{item.name}
                            </p>
                        ))}
                        <p
                            className='text-[#EBC80C] text-base font-medium py-2 flex gap-1 items-center cursor-pointer'
                        >
                            Browse All Product
                            <FaArrowRight />
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='text-base font-medium'>QUICK LINKS</h2>
                    <div className='mt-5'>
                        {footerLinks2.map((item, index) => (
                            <p
                                key={index}
                                className='text-[#77878F] font-normal text-sm py-2 cursor-pointer'
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='text-base font-medium'>DOWNLOAD OUR APP</h2>
                    <div className='flex flex-col gap-4 mt-5'>
                        <img src={googlePlay} alt="" className='w-44' />
                        <img src={appStore} alt="" className='w-44' />
                    </div>
                </div>
                <div>
                    <h2 className='text-base font-medium'>POPULAR TAG</h2>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {tags.map((item, index) => (
                            <p className='text-sm border border-[#303639] flex justify-center text-center px-4 py-2 cursor-pointer hover:bg-[#303639] hover:border-[#FFFFFF]'>
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='py-3' />
            <p className='text-[#77878F] text-sm font-normal text-center'>Copyright All right reserved</p>
        </div>
    )
}

export default Footer
