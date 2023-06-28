import React from 'react'
import JobCard from '../components/JobCard'
const Jobs = () => {
  return (
    <div>
      <ul className='mx-4'>
        <JobCard jobTitle="Fullstack Develper" salary="20000"/>
      </ul>
    </div>
  )
}

export default Jobs