import { useState } from "react";
import {useNavigate} from 'react-router-dom' 
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/authSlice";
import Axios from 'axios'
export default function HoverDropdown(props) {
const [open, setOpen] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();
const { userInfo } = useSelector((state) => state.auth);

const logoutHandle = async() =>{
  try{
  const result = await Axios.post("http://localhost:3001/api/users/logout")
  dispatch(logout());
  navigate('/')
  console.log(result.data.message)
  }catch(err){
    console.log(err)
  }
}

  return (
    <div className="flex justify-center z-20">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center  p-2 bg-white rounded-md"
        >
          <span className="mr-4"><img src = {props.profilePic} alt="profile" className="rounded-full h-10 w-10" /></span>
          <span className="mr-4">{props.name}</span>
        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            <button onClick = {()=>{navigate("/dashboard")}}>My Dashboard</button>
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            <button onClick = {()=>{navigate("/dashboard")}}>Settings</button>
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            <button onClick = {logoutHandle}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}