import React, { useState, useEffect } from 'react'
import './checklist.css'
import {data} from '../../../Data'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import Ckheader from '../header/Ckheader';

const Checklist = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate("")  



    useEffect(()=>{

    })



    const Backtomain = ()=>{
       navigate("/home")  
    }

    const Updateinsurer = (id)=>{
        console.log(id);
        toast.success("About to update insurer's information right now! ",{
            position:toast.POSITION.BOTTOM_RIGHT
        })
    }

  return (
    <>
    <Ckheader/>

    <div className="templateContainer">
        <ToastContainer/>

        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.vehicle_number.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
                
              })
              .map((val) => {
                return(
                  <div className="template">
                      <i className='fa-regular fa-user'></i>
                      <h3><small small className='cat'>{val.email}</small> {val.names}</h3>
                      <p className="price"> {val.ticketno}</p>
                   <div className='status'>
                      <button className='btnstatus' type='submit' onClick={Updateinsurer}>status</button>
                      <p className="session">pending</p>
                    </div>   
                 </div> 
                )
              })  
          }
        </div>
      </div>
    </>
  )
}

export default Checklist