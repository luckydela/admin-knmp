import React from 'react'
import './applayout.css'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar';
import Apcontent from '../appcontent/Apcontent';

const Applayout = () => {
  return (
    <>
      <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Apcontent/>
        </div>
    </>

  )
}

export default Applayout
