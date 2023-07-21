import React from 'react'
import Profile from '../assets/Profile.jpg'
import { BiCurrentLocation, BiMap, BiRupee } from 'react-icons/bi'
const JobCard = (props) => {
  console.log(props.jobData.jobTitle)
  return (
    <li className="text-sm leading-6 mt-3 list-none">
  <figure
    className="relative flex flex-col-reverse bg-gray-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
    <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
      <span className="bg-teal-200 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300">Teal</span>
      <span className="bg-teal-200 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300">Teal</span>
      <div className='flex flex-1 font-semibold gap-2 justify-end items-end mt-3'>
      
      <button className='flex justify-center items-center text-rose-500 border border-rose-500 rounded-full py-2 px-5'>View Details</button>
        
        <button className='bg-rose-500 hover:bg-rose-600 transition duration-150 ease-in flex justify-center items-center text-white rounded-full py-2 px-5'>Apply
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>

      </div>
    </blockquote>
    <figcaption className="flex items-center space-x-4"><img src={Profile} alt="logo"
        className="flex-none w-20 h-20 rounded-lg object-contain" loading="lazy" decoding="async" />
      <div className="flex-auto">
        <div className="text-base text-slate-900 font-semibold dark:text-slate-300"><a
            href="https://twitter.com/ryanflorence/status/1187951799442886656" tabIndex="0"><span
              className="absolute inset-0"></span>{props.jobData.jobTitle}</a></div>
        <div className="mt-0.5 flex flex-row">
          <div className='flex flex-row border-r border-slate-400 pr-3'>
            <BiRupee size={20} className='pt-1'/>
            <span>{props.jobData.salary}</span>
          </div>
          <div className='flex flex-row border-r border-slate-400 pr-3'>
            <BiMap size={20} className='pt-1'/>
            <span>{props.jobData.location}</span>
          </div>
          <div className='flex flex-row pr-3'>
            <BiRupee size={20} className='pt-1'/> 
            <span> sal </span>
          </div>
        </div>
      </div>
    </figcaption>

  </figure>
</li>
)
}

export default JobCard