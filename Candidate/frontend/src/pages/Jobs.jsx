import React from 'react'
import JobCard from '../components/JobCard'
const Jobs = () => {
  return (
    <div className='m-4'>
      <div className='text-md'> 96 jobs found</div>
      <ul>
        <JobCard jobTitle="Fullstack Develper" salary="20000"/>
      </ul>
    </div>
  )
}

export default Jobs