import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Profile from '../components/Profile'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Achievement from '../components/Achievement'
import Certificates from '../components/Certificates'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0)
  const location = useLocation()
  useEffect(()=>{
 })

  const tabStyle = 'inline-block rounded-full px-4 py-2 mx-2 hover:bg-rose-500 hover:text-white border'
  return (
    <>
      <ul id = "tabs" className='overflow-auto md:mx-auto md:w-2/3 my-5 px-5 py-2 whitespace-nowrap scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-rose-100 scrollbar-thumb-rounded-md'>
        <li className='inline-block'><NavLink className={activeTab==0 ? `${tabStyle} bg-rose-500 text-white` : tabStyle } to='#' onClick={() => setActiveTab(0)}>Profile</NavLink></li>
        <li className='inline-block'><NavLink className={activeTab==1 ? `${tabStyle} bg-rose-500 text-white` : tabStyle } to='#' onClick={() => setActiveTab(1)}>Education</NavLink></li>
        <li className='inline-block'><NavLink className={activeTab==2 ? `${tabStyle} bg-rose-500 text-white` : tabStyle } to='#' onClick={() => setActiveTab(2)}>Work Experiance</NavLink></li>
        <li className='inline-block'><NavLink className={activeTab==3 ? `${tabStyle} bg-rose-500 text-white` : tabStyle } to='#' onClick={() => setActiveTab(3)}>Projects</NavLink></li>
        <li className='inline-block'><NavLink className={activeTab==4 ? `${tabStyle} bg-rose-500 text-white` : tabStyle } to='#' onClick={() => setActiveTab(4)}>Achievements</NavLink></li>
        <li className='inline-block'><NavLink className={activeTab==5 ? `${tabStyle} bg-rose-500 text-white` : tabStyle } to='#' onClick={() => setActiveTab(5)}>Certificates</NavLink></li>
      </ul>
      <div>
        {activeTab == 0 &&
        <Profile></Profile>
        }
        {activeTab == 1 &&
        <Education></Education>
        }
        {activeTab == 2 &&
        <WorkExperience/>
        }
        {activeTab == 3 &&
        <Projects/>
        }
        {activeTab == 4 &&
        <Achievement/>
        }
        {activeTab == 5 &&
        <Certificates/>
        }
      </div>
    </>
  )
}

export default Dashboard