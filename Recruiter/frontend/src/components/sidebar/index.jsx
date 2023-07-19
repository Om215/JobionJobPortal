import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore, AiOutlinePlus } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu, MdWorkOutline } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";


const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white top-0 text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:fixed fixed h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
        <svg
              className="w-8"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke= "rgb(190,18,60)"
              fill="none"
            >
                <rect id='line' x="3" y="1" width="7" height="12" />
                <rect id='line' x="3" y="17" width="7" height="6" />
                <rect id='line' x="14" y="1" width="7" height="6" />
                <rect id='line' x="14" y="11" width="7" height="12" />
              </svg>
          {/* <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          /> */}
          <div className="flex flex-col">
          <span className="text-xl whitespace-pre">Jobion.</span>
          <span className="text-sm whitespace-pre-line">Recruiter Panel</span>
          </div>  
        </div>

        <div className="flex flex-col  h-full">
          <NavLink to = "/newpost"  className="flex justify-center items-center border rounded-md p-2 m-2 gap-1 font-semibold cursor-pointer hover:bg-rose-500 hover:text-white">
          <AiOutlinePlus size={24}/>
            <span>Post New Job</span>
          </NavLink>
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/recruiterdashboard"} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/candidates"} className="link ">
                <BsPerson size={23} className="min-w-max" />
                Candidates
              </NavLink>
            </li>
            <li>
              <NavLink to={"/jobs"} className="link">
                <MdWorkOutline size={23} className="min-w-max" />
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to={"/internships"} className="link">
                <MdWorkOutline size={23} className="min-w-max" />
                Internships
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                  <small>Tata Consultancy Services</small>
                </div>
                <button className="text-teal-500 border-teal-500 border py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          {/* <IoIosArrowBack size={25} /> */}
        </motion.div>
      </motion.div>
      <div className="m-3 block  md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} className="mt-4" />
      </div>
    </div>
  );
};

export default Sidebar;
