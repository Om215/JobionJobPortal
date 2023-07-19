import React, { useState, useEffect } from 'react'
import JobCard from '../components/JobCard'
import Axios from 'axios'

const Jobs = () => {
  const [job, setJob] = useState(null)

  const fetchJob = async() =>{
    return await Axios.get('http://localhost:3001/api/jobs').then(response =>{
      setJob(response.data)
    })
  }
  useEffect(()=>{
    fetchJob();
  },[])

  return (
    <div className='m-4'>
      <div className='text-md'> 96 jobs found</div>
      <ul>
        <JobCard jobTitle="Fullstack Develper" salary="20000" />
      </ul>
    </div>
  )
}

export default Jobs