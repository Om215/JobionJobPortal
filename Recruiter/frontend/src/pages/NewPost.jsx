import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import makeAnimated from 'react-select/animated';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { City } from 'country-state-city'

import { cityData } from '../assets/cityData';
import { skillsData } from '../assets/skillsData'
 
const NewPost = () => {
  const animatedComponents = makeAnimated();
  document.title = "Post New Job"
  const { userInfo } = useSelector((state) => state.auth);

  const [jobTitle, setJobTitle] = useState('')
  const [opType, setOpType] = useState('')
  const [jobType, setJobType] = useState('')
  const [salaryType, setSalaryType] = useState('')
  const [fs, setfs] = useState('')
  const [minrs, setMinrs] = useState('')
  const [maxrs, setMaxrs] = useState('')
  const [salary, setSalary] = useState(0)
  const [vacancies, setVacancies] = useState(0)
  const [location, setLocation] = useState('')
  const [jd, setJd] = useState('')
  const [jobCategory, setJobCategory] = useState('')
  const [skills, setSkills] = useState([])

  //ReactQulill CONFIG
  const tools = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
      ['clean']
    ],
  }
  const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link',
  ]

  //COMMON STYLE FOR REACT-SELECT COMPONENT
  const selectStyle = {
    style: {
      control: (baseStyles) => ({
        ...baseStyles,
        padding: '0.13rem',
        borderRadius: '5px'
      }),
    },
    theme: (theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#f43f5e',
        primary25: '#ffe4e6',
        primary75: '#ffe4e6',
        primary50: '#ffe4e6'
      },
    })
  }

  //HANDLING SALARY
  useEffect(() => {
    if (salaryType === 'fs') {
      setSalary(fs)
      setMinrs('')
      setMaxrs('')
    } else {
      setSalary(minrs.concat('-', maxrs))
      setfs('')
    }
    console.log(salary)
  }, [salaryType, fs, salary, minrs, maxrs])

  const handleMultiSelect = (e) =>{
    setSkills(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  //HANDLE FORM SUBMIT REQUEST
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const result = await Axios.post("http://localhost:3001/api/jobs", {
        jobTitle: jobTitle,
        opType: opType,
        jobType: jobType,
        jobCategory: jobCategory,
        salary: salary,
        vacancies: vacancies,
        jobDescription: jd,
        postedBy: userInfo._id,
        location: location,
        skills: skills
      })
      toast.success('Posted New Job Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      console.log(result.data)
    } catch (err) {
      console.log(err)
      toast.error('Something Went Wrong!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  }

  return (
    <>
      <div className='flex flex-col gap-5'>
        <span className='text-xl font-medium mb-2'> Post New Job </span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Job Title:</label>
            <input type="text" className="textbox" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
          </div>

          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Opportunity Type:</label>

            <Select options={[{ value: "job", label: "Job" }, { value: "internship", label: "Internship" }]}
              placeholder="Select Type"
              onChange={(e) => setOpType(e.value)}
              styles={selectStyle.style}
              theme={selectStyle.theme}
            />
          </div>
          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Job Time:</label>
            <Select options={[{ value: "Full-time", label: "Full-time" }, { value: "Part-time", label: "Part-time" }]}
              placeholder="Select Type"
              onChange={(e) => setJobType(e.value)}
              styles={selectStyle.style}
              theme={selectStyle.theme}
            />
          </div>

          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Job Category</label>
            <Select options={[{ value: "In-Office", label: "In-Office" }, { value: "Remote", label: "Remote" }, { value: "Work from Home", label: "Work from Home" }, { value: "Hybrid", label: "Hybrid" }]}
              placeholder="Select Type"
              onChange={(e) => setJobCategory(e.value)}
              styles={selectStyle.style}
              theme={selectStyle.theme}
            />
          </div>

          <div className='flex flex-1 flex-col'>
            <label>Salary:</label>
            <div className='flex flex-row'>
              <div className='flex gap-5 mt-2'>
                <label className='bg-rose-100 p-5 rounded-lg'>
                  <input type='radio' name='salaryType' value='fs' checked={salaryType === 'fs'} onChange={(e) => setSalaryType(e.target.value)} className="accent-rose-500" />    Fixed Salary
                </label>
                <label className='bg-rose-100 p-5 rounded-lg'>
                  <input type='radio' name='salaryType' value='rs' checked={salaryType === 'rs'} onChange={(e) => setSalaryType(e.target.value)} className="accent-rose-500" />    Ranged Salary
                </label>
              </div>
            </div>
            {/* {
              salaryType === 'fs' ? <div className='mt-2'><input className="textbox" type='number' onChange={(e) => setfs(e.target.value)} placeholder='Enter Fixed Salary' /></div> :
                <div className='flex flex-1 flex-row gap-5 mt-2'><input className="textbox" value={minrs} type="number" onChange={(e) => setMinrs(e.target.value)} placeholder="Min. Salary" /> <input className="textbox" type="number" onChange={(e) => setMaxrs(e.target.value)} value={maxrs} placeholder="Max. Salary" /> </div>
            } */}

            {
              salaryType === 'fs' ? <div className='mt-2'><input className="textbox" type='number' onChange={(e) => setfs(e.target.value)} placeholder='Enter Fixed Salary' /></div> : null
            }
            {
              salaryType === 'rs' ? <div className='flex flex-1 flex-row gap-5 mt-2'><input className="textbox" value={minrs} type="number" onChange={(e) => setMinrs(e.target.value)} placeholder="Min. Salary" /> <input className="textbox" type="number" onChange={(e) => setMaxrs(e.target.value)} value={maxrs} placeholder="Max. Salary" /></div> : null
            }

          </div>

          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Location</label>
            <Select options={
              cityData.map(item => ({
                label: item,
                value: item
              }))}
              placeholder="Select Location"
              onChange={(e) => setLocation(e.value)}
              styles={selectStyle.style}
              theme={selectStyle.theme}
            />
          </div>

          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Number of Vacancies:</label>
            <input type="number" className='textbox' placeholder="Vacancy" value={vacancies} onChange={(e) => setVacancies(e.target.value)} required />
          </div>

          <div className='flex flex-col flex-1'>
            <label className='mb-3'>Skills:</label>
            <Select options={
              skillsData.map(item => ({
                label: item,
                value: item
              }))}
              components={animatedComponents}
              isMulti
              isClearable
              placeholder="Select Location"
              onChange={handleMultiSelect}
              styles={selectStyle.style}
              theme={selectStyle.theme}            />
          </div>
          <label>Job Description:</label>
          <ReactQuill theme="snow"
            modules={tools}
            formats={formats}
            value={jd}
            onChange={setJd}>
          </ReactQuill>
          <div className='flex flex-1 items-end justify-end mt-4'>
            <input type='submit' value="Post" className='text-white cursor-pointer bg-rose-500 py-2 px-6 rounded-full' />
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default NewPost