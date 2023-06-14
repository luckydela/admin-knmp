import React from 'react'
import './ckheader.css'

const Ckheader = () => {
  return (
    <div className="ckheader">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">KN Park Checkor</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <i className='fa-regular fa-bell fa-fade'></i>
            <span className="topIconBadge">2</span>
          </div>
        
        
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  )
}

export default Ckheader
