import React from 'react'
import './cklogin.css' 
import { useNavigate } from 'react-router-dom'
// import loginimg from '../../../assets/cklogin.jpeg'

const Cklogin = () => {
    const navigate = useNavigate("");


    const Login = ()=>{
        navigate("/checklist");
    }
  return ( 
<div class="wrapper">
  <div class="container">
    <div class="col-left">
      <div class="login-text">
        <h2>Welcome Back, Checkor</h2>
        <p>Kwame Nkrumah<br/>Memorial Park</p>
        <a class="btn" href="">Be Bold</a>
      </div>
    </div>
    <div className="col-right">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <p>
            <label>Username or email address<span>*</span></label>
            <input type="text" placeholder="Username or Email" required />
          </p>
          <p>
            <label>Password<span>*</span></label>
            <input type="password" placeholder="Password" required />
          </p>
          <p>
            <button type="submit" className='btn' onClick={Login}>Login</button>
          </p>
          <p>
            <a href="">Forget Password?</a>
          </p>
        </form>
      </div>
    </div>
  </div>
  <div class="credit">
    Designed by <a href="#"> by Delax Enterprise Solutions</a>
  </div>
</div>
  )
}

export default Cklogin