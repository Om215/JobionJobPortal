import React, { useState, useEffect } from 'react'
import JobCard from '../components/JobCard'
import Axios from 'axios'

const Internships = () => {
    const [internship, setInternship] = useState()
  console.log(location.pathname)
  const fetchJob = async () => {
    const result = await Axios.get('http://localhost:3001/api/jobs/internship')
    setInternship(result.data)
    console.log(internship)
  }

  useEffect(() => {
    fetchJob();
  }, [])

  return (
    <>
      {
        internship &&
        <div className='m-4'>
          <div className='text-md'>{internship.length} internships found</div>
          <ul>
            {internship.map(item => (
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

export default Internships