import React, { useState, useEffect } from 'react'
import JobCard from '../components/JobCard'
import Axios from 'axios'

const Jobs = () => {
  const [job, setJob] = useState()

  const fetchJob = async () => {
    const result = await Axios.get('http://localhost:3001/api/jobs/job')
    setJob(result.data)
    console.log(job)
  }

  useEffect(() => {
    fetchJob();
  }, [])

  return (
    <>
      {
        job &&
        <div className='m-4'>
          <div className='text-md'>{job.length} jobs found</div>
          <ul>
            {job.map(item => (
              <div key = {item._id}>
                <JobCard jobData={item} />
              </div>
            ))}

          </ul>
        </div>
      }

    </>
  )
}

export default Jobs