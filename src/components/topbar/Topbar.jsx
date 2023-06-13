import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">knmp admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <NotificationsNone /> */}
            <i className='fa-regular fa-bell fa-fade'></i>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <i className='fa fa-language'></i>
            {/* <Language /> */}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <i className='fa fa-gear'></i>

            {/* <Settings /> */}
          </div>
          <i class="fa fa-user"></i>
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  )
}

export default Topbar
