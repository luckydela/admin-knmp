import React from 'react'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'

const Applayout = () => {
  return (
    <Router>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/users">
          {/* <UserList /> */}
        </Route>
        <Route path="/user/:userId">
          {/* <User /> */}
        </Route>
        <Route path="/newUser">
          {/* <NewUser /> */}
        </Route>
        <Route path="/products">
          {/* <ProductList /> */}
        </Route>
        <Route path="/product/:productId">
          {/* <Product /> */}
        </Route>
        <Route path="/newproduct">
          {/* <NewProduct /> */}
        </Route>
      </Routes>
    </div>
  </Router>
  )
}

export default Applayout
