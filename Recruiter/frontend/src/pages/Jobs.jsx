import React, { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { BiBookmarkPlus, BiEdit, BiTrash } from 'react-icons/bi'
import { AiOutlineProfile } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import Axios from 'axios';

const Jobs = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('')

  //PAGINATION CONFIG
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  //FETCH JOBS
  const fetchDummy = async () => {
    return await Axios.get(`http://localhost:3001/api/jobs/${userInfo._id}/jobs`).then(response => {
      setData(response.data)
    })
  }
  useEffect(() => {
    fetchDummy();
  }, [])

  //DELETE JOB
  const deleteJob = async (id) => {
    const result = await Axios.delete(`http://localhost:3001/api/jobs/${id}`)
    console.log(result)
    if (result.status === 204) {
      toast.success('Job has been Deleted!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      setData([...data.filter((job) => job._id !== id)])
    }
  }

  //FILTERING DATA FOR SEARCH


  //PAGINATION
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)

  console.log(data)
  return (
    <>
      <div className='flex flex-col gap-1'>
        <span className='text-xl font-medium mb-2'> Jobs </span>
        <span className='text-sm'>See All your Posted Jobs Here</span>
        <div className="relative">
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
          <form>
            <input id="search" type="search" name="search" value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" placeholder="Enter ID" />
          </form>
          <p>{searchQuery}</p>
        </div>
      </div>
      {currentRecords.length === 0 ? <p className='m-10'>No Records Found</p>:
        <>
          <table className='mt-3 table-auto'>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Job Title</th>
                <th scope="col">Location</th>
                <th scope="col">Salary</th>
                <th scope="col">Applied</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                currentRecords.map(item => (
                  <tr key={item._id}>
                    <td data-label="ID" className='text-rose-500'>{item._id}</td>
                    <td data-label="Name">{item.jobTitle}</td>
                    <td data-label="Skills">{item.location}</td>
                    <td data-label="Salary">&#8377;{item.salary}</td>
                    <td data-label="Vacancies">{item.vacancies}</td>
                    <td data-label="Status"><span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Live</span></td>
                    <td data-label="Actions" className=''>
                      <button className='px-1' title="View Full Details"><AiOutlineProfile size={20} className='hover:text-rose-500' /></button>
                      <button className='px-1' title="Edit"><BiEdit size={20} className='hover:text-rose-500' /></button>
                      <button onClick={()=> deleteJob(item._id)} className='px-1' title="Delete"><BiTrash size={20} className='hover:text-rose-500' onClick={()=> deleteJob(item._id)} /></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className='flex overflow-clip justify-end items-end m-3 p-3'>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      }
      <ToastContainer />
    </>
  )
}
export default Jobs