import React from 'react'
import {FaBook} from'react-icons/fa'

const DashboardCards = (props) => {
  return (
    <div className='flex gap-2 border shadow-sm shadow-gray-200  rounded-lg px-4 py-2'>
        <div className='flex items-center justify-center'>
            <FaBook className='text-3xl text-rose-600' />
        </div>
        
        <div className='flex flex-col px-3'>
            <span name = "cand" id="cand" className='font-semibold text-2xl'>{props.count}</span>
            <span className='font-medium text-lg'>{props.title}</span>
        </div>    
    </div>
  )
}

export default DashboardCards