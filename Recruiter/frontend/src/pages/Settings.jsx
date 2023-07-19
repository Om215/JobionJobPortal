import React, { useState, useEffect } from 'react'
import dummyImg from '../assets/dummy_image.jpg'
import { BsFillCameraFill } from 'react-icons/bs'
const Settings = () => {
    const [profileImg, setProfileImg] = useState()
    useEffect(()=>{
        console.log(profileImg)
    })
    
    return (
    <>
    <div className = "text-2xl font-semibold">Settings</div>

    <div className='relative overflow-hidden h-48 w-48'>
    <img src={dummyImg} alt="company logo" className="flex-none w-48 h-48 border-green-700 border-2 rounded-full object-contain" loading="lazy" decoding="async"/>
    <label htmlFor = "profileUpload" className="absolute bottom-3 right-4 border rounded-full h-10 w-10 border-black bg-gray-50  flex items-center justify-center cursor-pointer z-10">
        <BsFillCameraFill size={20} className='text-rose-500'/>
        <input type = "file" accept='.png, .jpg, .jpeg' id = "profileUpload" name = "profileUpload" onChange={(e)=>setProfileImg(e.target.files[0])} className='hidden'/>
    </label>
    </div>

{/* <div className="flex items-center justify-center w-48 h-48">
    <div className="relative w-48 h-48 rounded-full overflow-hidden">
      <img src={dummyImg} alt="Profile Photo" className="w-full h-full object-cover"/>
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer z-10">
        <BsFillCameraFill size = {15}/>
      </div> 
    </div>
  </div> */}

    </>
    
  )
}

export default Settings