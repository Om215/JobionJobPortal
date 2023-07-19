import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import DashboardCards from '../components/DashboardCards';

const RecruiterDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [fetchedJob,setFetchedJob] = useState([])
  useEffect(()=>{
    const fetchData = async() =>{
      const result = await Axios.get(`http://localhost:3001/api/jobs/${userInfo._id}`)
      console.log(result)
      setFetchedJob(fetchData)
    }
    fetchData()
  },[userInfo._id])

  return (
    <>
      <div className='font-semibold text-2xl'>Hello, {userInfo.firstName} &#x1F60A;</div>
      <div className='flex flex-1 flex-col lg:flex-row gap-3 mt-6'>
        <DashboardCards count = '20' title = "Jobs Posted"/>
        <DashboardCards count = '120' title = "Bookmarked Candidates"/>
      </div>
      <div>
        
      </div>
      
    </>
  )
}

export default RecruiterDashboard