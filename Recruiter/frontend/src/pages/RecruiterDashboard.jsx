import React from 'react'
import { useSelector } from 'react-redux'

const RecruiterDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className='font-semibold text-2xl'>Hello, {userInfo.name} &#x1F60A;</div>
    </>
  )
}

export default RecruiterDashboard