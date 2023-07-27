import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import Profile from '../assets/profile.jpg'
import {FaBars, FaSearch} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {NavLink, Outlet} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {motion} from 'framer-motion'
import HoverDropdown from '../components/HoverDropdown'
import Searchbar from './Searchbar';

export default function Navbar(){
  const { userInfo } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  return (
    <>
      <motion.div 
      initial = {{y:-1000}}
      animate = {{y: 0}}
      transition={{delay: 1, duration:1.5}}
      className="px-4 py-4 mx-0 sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 shadow-md">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            
            {/* Responsive Hamburger Icon */}
            <div className='lg:hidden pr-3 text-xl text-slate-900'>
              <FaBars onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
            </div>

            {/* Navbar items for large screens */}
            <a href="/" aria-label="Jobion" title="Jobion" className="inline-flex items-center mr-8">
              <svg
                className="w-8"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke= "rgb(190,18,60)"
                fill="none">
                <rect id='line' x="3" y="1" width="7" height="12" />
                <rect id='line' x="3" y="17" width="7" height="6" />
                <rect id='line' x="14" y="1" width="7" height="6" />
                <rect id='line' x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wid text-rose-600 uppercase">
                Jobion
              </span>
            </a>

            {/* NAV Menu*/}
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/jobs"
                  title="Jobs"
                  className="font-semibold tracking-wide  transition-colors duration-200 hover-underline-animation hover:text-rose-600"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/internships"
                  title="Internships"
                  className="font-semibold tracking-wide  transition-colors duration-200 hover-underline-animation hover:text-rose-600"
                >
                  Internships
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/companies"
                  aria-label="Companies"
                  title="Companies"
                  className="font-semibold tracking-wide  transition-colors duration-200 hover-underline-animation hover:text-rose-600"
                >
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  aria-label="Support"
                  title="Support"
                  className="font-semibold tracking-wide  transition-colors duration-200 hover-underline-animation hover:text-rose-600">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='flex flex-1 justify-end items-end flex-row'>
              <div className='mr-2 p-2 hover:bg-rose-50 rounded-full'>
                <FaSearch size={20} onClick={()=>setIsSearchOpen(!isSearchOpen)}/>
              </div>
          </div>

          {
            userInfo ?
            <HoverDropdown name = {userInfo.name} profilePic = {Profile} /> :
            <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink to="/signup"
                aria-label="Sign up"
                title="Sign up"
                className="font-medium tracking-wide transition-colors duration-200 hover:text-rose-700">
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                aria-label="Sign in"
                title="Sign in">
                Sign in
              </NavLink>
            </li>
          </ul>

          }
          

          {/* Navbar items for small screens */}
          <div className="lg:hidden">
            {isMenuOpen && (
              <motion.div
              initial={{width: '0%'}}
              animate={{width: '80%'}}
              className={`top-0 left-0 w-[80%] shadow shadow-gray-50 text-white fixed h-full z-40 bg-rose-400 ease-in-out duration-500 
                ${isMenuOpen ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <AiOutlineClose size={30} onClick={()=>setIsMenuOpen(!isMenuOpen)} className="ml-80 mt-10"/>
              <div className='flex justify-center items-center pb-1 flex-col'>
              <a href="/" className="mt-20 text-4xl font-semibold text-gray-100">
                Jobs
              </a>
              <a href="/" className="mt-20 text-4xl font-semibold text-gray-100">
                Internships
              </a>
              <a href="/" className="mt-20 text-4xl font-semibold text-gray-100">
                Companies
              </a>
              <a href="/" className="mt-20 text-4xl font-semibold text-gray-100">
                Support
              </a>
              </div>
            </motion.div>
            )}
          </div>
        </div>
        <Outlet/>
      </motion.div>
      {isSearchOpen && <Searchbar/>}
      </>
  )
}
