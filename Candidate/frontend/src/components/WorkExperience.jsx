import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ReactModal from 'react-modal'
import Select from 'react-select'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Months from '../assets/MonthData.json'

const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(false)
  const [roleDescription, setRoleDescription] = useState('')

  //ReactQuill CONFIG
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
  //STYLE FOR SELECT COMPONENT
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

  const yearsArray = Array.from({ length: 2023 - 1970 + 1 }, (_, index) => 2023 - index);
  const yearsStringArray = yearsArray.map(year => year.toString());
  
  return (
    <>
      <div className='flex'>
        <button onClick={() => setIsOpen(true)} className='mx-10 border-slate-300 p-4 border-dashed border-2 flex flex-1 justify-center items-center font-medium text-rose-500 hover:bg-rose-500 hover:text-white'> + Add New Work Experience</button>
        <ReactModal
          isOpen={isOpen}
          style={{
            overlay: {
              zIndex: 999,
              display: "flex",
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',

            },
            content: {
              display: "flex",
              alignSelf: 'center',
              gap: 5,
              flexDirection: "column",
              zIndex: 999,
              borderRadius: '25px',
              width: '75%',
              margin: 'auto',
            },
          }}>
          <div className='flex flex-row scrollbar-thin'>
            <div className='flex justify-start text-lg'>
              Add New Work Experience
            </div>
            <div className='flex flex-1 justify-end'>
              <AiOutlineClose size={25} onClick={() => setIsOpen(false)} />
            </div>
          </div>

          <div className='mt-5'>
            <form className='flex flex-col gap-3'>
              <label htmlFor="companyName">Company name: </label>
              <input type='text' id="companyName" placeholder='Company Name' className='textbox' />
              <label htmlFor="Designation">Designation/Role: </label>
              <input type='text' id="Designation" placeholder='Designation/Role' className='textbox' />

              <div className="flex flex-1 flex-col md:flex-row  gap-2">
                <div className='flex flex-1 flex-col gap-3'>
                  <label htmlFor='Starting Month'>Starting Month: </label>
                  <Select style={selectStyle.style} theme={selectStyle.theme}
                    placeholder="Starting Month"
                    id="Starting Month"
                    options={Months.months.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3'>
                  <label htmlFor='starting Year'>Starting Year: </label>
                  <Select style={selectStyle.style} theme={selectStyle.theme}
                    placeholder="Starting Year"
                    id="starting Year"
                    options={yearsStringArray.map((item)=> ({ label: item, value: item }))}
                  />
                </div>
              </div>
              <div className='flex flex-row gap-3'>
                <input type='checkbox' id="Current Employee" value={currentEmployee} onChange={() => setCurrentEmployee(!currentEmployee)} className='accent-rose-500' />
                <label htmlFor="Current Employee">I am currently working here</label>
              </div>
              {
                currentEmployee ? <></> : <div className="flex flex-1 flex-col md:flex-row  gap-2">
                  <div className='flex flex-1 flex-col gap-3'>
                    <label htmlFor='Ending Month'>Ending Month: </label>
                    <Select style={selectStyle.style} theme={selectStyle.theme}
                      placeholder="Ending Month"
                      id="Ending Month"
                      options={Months.months.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-3'>
                    <label htmlFor='starting Year'>Ending Year: </label>
                    <Select style={selectStyle.style} theme={selectStyle.theme}
                      placeholder="Ending Year"
                      id="Ending Year"
                      options={yearsStringArray.map((item)=> ({ label: item, value: item }))}
                    />
                  </div>
                </div>
              }
              <label htmlFor="roleDescription">Role Description:</label>
              <ReactQuill theme="snow"
                id='roleDescription'
                placeholder="Describe your Role and Responsibilities within organization"
                modules={tools}
                formats={formats}
                value={roleDescription}
                onChange={setRoleDescription}>
              </ReactQuill>
              <div className='flex flex-row justify-end gap-2'>
                <button onClick={() => setIsOpen(false)} className='px-4 py-2 rounded-full border'>Close</button>
                <button onClick={() => setIsOpen(false)} className='px-4 py-2 rounded-full bg-rose-500 text-white'>Save</button>
              </div>
            </form>
          </div>
        </ReactModal>
      </div>
    </>
  )
}

export default WorkExperience