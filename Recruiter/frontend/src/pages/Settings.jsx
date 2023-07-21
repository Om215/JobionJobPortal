import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import dummyImg from '../assets/dummy_image.jpg'
import { BsFillCameraFill } from 'react-icons/bs'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Settings = () => {

    const { userInfo } = useSelector((state) => state.auth);

    const [profileImg, setProfileImg] = useState(dummyImg)
    const [firstName, setFirstName] = useState(userInfo.firstName)
    const [lastName, setLastName] = useState(userInfo.lastName)
    const [companyName, setCompanyName] = useState('')
    const [designation, setDesignation] = useState('')

    const [aboutCompany, setAboutCompany] = useState('')
    const [isOpen, setIsOpen] = useState(false)


    const [file, setFile] = useState("")
    const [percent, setPercent] = useState(0)

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
                console.log(percent)
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setProfileImg(url);
                });
            }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleUpload()
        console.log("upload success")
    }


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
    return (
        <>
            <div className="text-2xl font-semibold">Profile Settings</div>
            <div className='m-5 flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='relative overflow-hidden h-40 w-40'>
                    {profileImg && <img src={profileImg} alt="company logo" className="flex-none w-40 h-40 border-green-700 border-2 rounded-full object-contain" loading="lazy" decoding="async" />}
                </div>
                <div className='flex flex-1 flex-col'>
                    <div className='text-xl'>{`${userInfo.firstName} ${userInfo.lastName}`}</div>
                    <div className='text-lg'>Senior Software Developer</div>
                    <div className='text-lg'>Tata Consultancy Services</div>
                </div>
            </div>
            <button onClick={() => setIsOpen(true)} className='text-white cursor-pointer bg-rose-500 py-2 px-6 rounded-full'>Edit</button>

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
                    <div className='relative overflow-hidden h-40 w-40 md:h-48 md:w-48'>
                        {
                            profileImg &&
                            <img src={profileImg} alt="company logo" className="flex-none w-40 h-40 md:h-48 md:w-48 border-green-700 border-2 rounded-full object-contain" loading="lazy" decoding="async" />
                        }
                        <label htmlFor="profileUpload" className="absolute bottom-3 right-2 border rounded-full h-10 w-10 border-black bg-gray-50  flex items-center justify-center cursor-pointer z-10">
                            <BsFillCameraFill size={20} className='text-rose-500' />
                            <input onChange={handleChange} type="file" accept='image/*' id="profileUpload" name="profileUpload" className='hidden' />
                        </label>
                    </div>
                    <input type="text" value={firstName} onChange={setFirstName} name="firstName" placeholder='First Name' required className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" />
                    <input type="text" value={lastName} onChange={setLastName} name="lastName" placeholder='Last Name' required className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" />
                    <input type="text" value={companyName} onChange={setCompanyName} name="companyName" placeholder='Company Name' required className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" />
                    <input type="text" value={designation} onChange={setDesignation} name="designation" placeholder='Designation' required className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" />
                    <ReactQuill theme="snow"
                        modules={tools}
                        formats={formats}
                        value={aboutCompany}
                        onChange={() => { setAboutCompany }}
                        placeholder="Upload Your Company Logo Above and Write Company Description Here"
                    >
                    </ReactQuill>
                    <div className='flex flex-row mt-20 md:mt-9 gap-10'>
                        <button onClick={() => setIsOpen(false)} className='text-white cursor-pointer bg-rose-500 py-2 px-6 rounded-full'>Close</button>
                        <button className='text-white cursor-pointer bg-rose-500 py-2 px-6 rounded-full'>Save</button>
                    </div>
                </form>
            </ReactModal>
        </>

    )
}

export default Settings