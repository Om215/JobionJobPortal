import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Searchbar = () => {
  return (
    <motion.div
    initial = {{y:-200}}
    animate = {{y:0}}
    className='relative m-2'>
        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <FaSearch size={20}/>
        </div>
        <form>
            <input type="text" placeholder='Search for Jobs/Internship' className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-rose-400" />
            <input type="submit" className='hidden'/>
        </form>
    </motion.div>
  )
}

export default Searchbar