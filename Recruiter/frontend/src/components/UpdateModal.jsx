import React, { useState } from 'react'
import ReactModal from 'react-modal'

const UpdateModal = (props) => {
    const data = props.data
    const [isOpen, setIsOpen] = useState(false)
    const [jobTitle, setJobTitle] = useState(data.jobTitle)
    const []


    return (
        <ReactModal
            isOpen={isOpen}
            ariaHideApp={false}
            style={{
                overlay: {
                    zIndex: 999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                },
                content: {
                    display: "flex",
                    gap: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    zIndex: 999,
                    borderRadius: '25px',
                },

            }}
        >
            <form onSubmit={handleSubmit} className='flex flex-1 flex-col justify-center items-center gap-5 mt-20'>
                <input type="text" value={firstName} onChange={setFirstName} name="firstName" placeholder='JobTitle' required className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" />
            </form>
        </ReactModal>
    )
}

export default UpdateModal