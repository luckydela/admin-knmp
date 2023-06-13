import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../views/admin/dashboard/Dashboard'

const Apcontent = () => {
  return (
   <Routes>
     <Route path='dashboard' exact  element={<Dashboard/>}/>

   </Routes>
  )
}

export default Apcontent