import React from 'react'
import './widgetslg.css'
import user from '../../assets/user.png'

const WidgetsLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      return (
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">No. of ticket</th>
              <th className='widgetLgTh'>Ticket number</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src={user}
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2</td>
              <td className="widgetLgDate">knmp2033423</td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">GHC122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
              <img
                  src={user}
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2</td>
              <td className="widgetLgDate">knmp0012123</td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">GHC122.00</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
              <img
                  src={user}
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>  
              <td className="widgetLgDate">2</td>
              <td className="widgetLgDate">knmp5050323</td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">GHC122.00</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
          </table>
        </div>
      )
}

export default WidgetsLg