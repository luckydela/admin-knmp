import React from 'react'
import './featherinfo.css'

const FeatheredInfo = () => {
  return (
    <div className="featured">
    <div className="featuredItem card1">
      <span className="featuredTitle">Users</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">2,415</span>
        <span className="featuredMoneyRate">
          {/* -11.4 <ArrowDownward  className="featuredIcon negative"/> */}
            -         <i id='featuredIcon' className='fa-regular fa-user'></i>
        </span>
      </div>
      <span className="featuredSub">7 days ago...</span>
    </div>
    <div className="featuredItem card2">
      <span className="featuredTitle">Ticket Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">GHC4,415</span>
        <span className="featuredMoneyRate">
          {/* -1.4 <ArrowDownward className="featuredIcon negative"/> */}
           -  <i id='featuredIcon' className='fa-solid fa-money-bill-transfer'></i>
        </span>
      </div>
      <span className="featuredSub">7 days ago...</span>
    </div>
    <div className="featuredItem card3">
      <span className="featuredTitle">Petronage</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">4,000</span>
        <span className="featuredMoneyRate">
          {/* +2.4 <ArrowUpward className="featuredIcon"/> */}
          +2.4 <i className='fa fa-arrow-up'></i>
        </span>
      </div>
      <span className="featuredSub">7 days ago...</span>
    </div>
  </div>
  )
}

export default FeatheredInfo