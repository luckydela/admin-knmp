import React from 'react'
import './featherinfo.css'

const FeatheredInfo = () => {
  return (
    <div className="featured">
    <div className="featuredItem card1">
      <span className="featuredTitle">Revanue</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">GHC2,415</span>
        <span className="featuredMoneyRate">
          {/* -11.4 <ArrowDownward  className="featuredIcon negative"/> */}
            -1.4 <i className='fa fa-arrow-down'></i>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem card2">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">GHC4,415</span>
        <span className="featuredMoneyRate">
          {/* -1.4 <ArrowDownward className="featuredIcon negative"/> */}
           -1.4 <i className='fa fa-arrow-down'></i>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem card3">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,225</span>
        <span className="featuredMoneyRate">
          {/* +2.4 <ArrowUpward className="featuredIcon"/> */}
          +2.4 <i className='fa fa-arrow-up'></i>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div>
  )
}

export default FeatheredInfo