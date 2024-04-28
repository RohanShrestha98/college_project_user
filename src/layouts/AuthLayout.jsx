import { Outlet } from 'react-router-dom';
import authImage from "../assets/login.jpg"

export default function AuthLayout() {
  return (
    <div className='grid grid-cols-2 gap-4 h-screen'>
        <div className='h-full'>
            <img src={authImage} className='h-full object-cover object-top' alt="" />
        </div>
        <div className='h-full'>
            <Outlet/>
        </div>
      
    </div>
  )
}
