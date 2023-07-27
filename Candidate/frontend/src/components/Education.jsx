import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'
import Select from 'react-select'
import data from '../assets/EducationData.json'

const Education = () => {
  const [isOpen, setIsOpen] = useState(false)
  
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


  //RETURN METHOD
  return (
    <div className='flex flex-1 flex-col'>
      <button onClick={() => setIsOpen(true)} className='mx-10 border-slate-300 p-4 border-dashed border-2 flex flex-1 justify-center items-center font-medium text-base text-rose-500 hover:bg-rose-500 hover:text-white'> + Add New Education</button>
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
            margin: 'auto'
          },
        }}>
        <div className='flex flex-row'>
          <div className='flex justify-start text-lg'>
            Add Education
          </div>
          <div className='flex flex-1 justify-end'>
            <AiOutlineClose size={25} onClick={() => setIsOpen(false)} />
          </div>
        </div>


        <div className='mt-5'>
          <form className='flex flex-col gap-3'>
            <label htmlFor="education"></label>
            <Select options={data.education.map((item) => ({
              label: item,
              value: item
            }))}
              id='education'
              style={selectStyle.style}
              theme={selectStyle.theme}
            />

            <input type="text" placeholder="School/College Name" className='textbox' />
            <input type="text" placeholder="Board/University" className='textbox'/>
            <input type='text' placeholder = "Year Of Passing" className='textbox'/>
            <input type='text' placeholder="Percentage" className='textbox' />
          </form>
        </div>
        <div className='flex flex-row justify-end gap-2'>
          <button onClick={() => setIsOpen(false)} className='px-4 py-2 rounded-full border'>Close</button>
          <button onClick={() => setIsOpen(false)} className='px-4 py-2 rounded-full bg-rose-500 text-white'>Save</button>
        </div>
      </ReactModal>

    </div>
  )
}

export default Education