import React from 'react'
import Profile from '../assets/Profile.jpg'

const JobCard = (props) => {
  return (
    <li className="text-sm leading-6 mt-3 list-none">
  <figure
    className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
    <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
    <span className="bg-teal-200 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300">Teal</span>
    <span className="bg-teal-200 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-teal-900 dark:text-teal-300">Teal</span>
    </blockquote>
    <figcaption className="flex items-center space-x-4"><img src={Profile} alt="logo"
        className="flex-none w-14 h-14 rounded-lg object-contain" loading="lazy" decoding="async" />
      <div className="flex-auto">
        <div className="text-base text-slate-900 font-semibold dark:text-slate-300"><a
            href="https://twitter.com/ryanflorence/status/1187951799442886656" tabindex="0"><span
              className="absolute inset-0"></span>{props.jobTitle}</a></div>
        <div className="mt-0.5">{props.salary}</div>
      </div>
    </figcaption>
  </figure>
</li>
)
}

export default JobCard