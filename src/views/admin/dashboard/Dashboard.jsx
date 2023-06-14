import React from 'react'
import './dashboard.css'
// import Widgetsm from '../../../components/widgets/widgetsm/Widgetsm'
import WidgetsLg from '../../../components/widgets/WidgetsLg'
import FeatheredInfo from '../../../components/featheredinfo/FeatheredInfo'
// import { userData } from '../../../dummyData'



const Dashboard = () => {
  return (
    <div className="home">
    <FeatheredInfo/>
    {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
    <div className="homeWidgets">
      {/* <Widgetsm/> */}
      <WidgetsLg/>
    </div>
  </div>
  )
}

export default Dashboard