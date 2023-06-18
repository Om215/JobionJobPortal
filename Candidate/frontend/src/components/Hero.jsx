import React from 'react'
import {motion, useInView} from 'framer-motion'

export default function Hero() {


return (
<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-5">
  <motion.div
    initial = {{x:300, opacity: 0}}
    whileInView = {{x:0, opacity: 1}}
    viewport={{once: false,}}
    transition = {{delay:1.3, duration:1.5}}
    className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
    <svg className="absolute left-0 hidden h-full  transform -translate-x-1/2 lg:block fill-white dark:fill-slate-900"
      viewBox="0 0 100 100" preserveAspectRatio="none slice">
      <path d="M50 0H100L50 100H0L50 0Z" />
    </svg>
    <img className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      alt="" />
  </motion.div>

  <motion.div 
  initial = {{x: -300,opacity:0}}
  whileInView = {{x:0,opacity:1}}
  viewport={{once: false}}
  transition={{delay: 1.3, duration: 1.5}}
  className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
      <p
        className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-500">
        Brand new
      </p>
      <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
        Everything you{' '}
        <br className="hidden md:block" />
        can imagine{' '}
        <span className="inline-block text-rose-500">
          is real
        </span>
      </h2>
      <p className="pr-5 mb-5 text-base  md:text-lg">
        Kickstart your Career journey by selecting Jobs and Internships across multiple domains.
      </p>
      <div className="flex items-center">
        <a href="/"
          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-rose-600 focus:shadow-outline focus:outline-none">
          Get started
        </a>
        <a href="/" aria-label=""
          className="inline-flex items-center font-semibold  transition-colors duration-200 hover:text-rose-600">
          Explore Now
        </a>
      </div>
    </div>
  </motion.div>
</div>
)
}