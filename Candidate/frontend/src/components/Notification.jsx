import React from 'react'

const Notification = (message) => {
  return (
    <div className='notification'>
        <p>{message}</p>
        <span className="notification-progress"></span>
    </div>
  )
}

export default Notification