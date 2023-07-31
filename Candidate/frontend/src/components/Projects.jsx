import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [projectTitle, setProjectTitle] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  //ReactQuill CONFIG
  const tools = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
    ],
  }
  const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link',
  ]
  return (
    <>
      <div className='flex'>
        <button onClick={() => setIsOpen(true)} className='mx-10 border-slate-300 p-4 border-dashed border-2 flex flex-1 justify-center items-center font-medium text-rose-500 hover:bg-rose-500 hover:text-white'> + Add New Project</button>
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
              Add New Project
            </div>
            <div className='flex flex-1 justify-end'>
              <AiOutlineClose size={25} onClick={() => setIsOpen(false)} />
            </div>
          </div>

          <div className='mt-5'>
            <form className='flex flex-col gap-3'>
              <label htmlFor="ProjectTitle">Project Title:</label>
              <input type='text' id='ProjecTitle' placeholder= "Project Title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} className='textbox' />
              <ReactQuill
                theme="snow"
                id='roleDescription'
                placeholder="Describe your project with features and skills used..."
                modules={tools}
                formats={formats}
                value={projectDescription}
                onChange={setProjectDescription}
              />
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

export default Projects