import React from 'react'
import './cklogin.css' 
import loginimg from '../../../assets/cklogin.jpeg'

const Cklogin = () => {
  return (
    
    <section class="login">
		<div class="login_box">
			<div class="left">
			
				<div class="contact">
					<form action="">
						<h3>Login</h3>
						<input type="text" placeholder="USERNAME"/>
						<input type="text" placeholder="PASSWORD"/>
						<button class="submit">LET'S GO</button>
					</form>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>LONYX</h2>
					<h5>A UX BASED CREATIVE AGENCEY</h5>
				</div>
				<div class="right-inductor">
          <img src={loginimg} alt=""/>
        </div>
			</div>
		</div>
	</div>
  </section>
  )
}

export default Cklogin