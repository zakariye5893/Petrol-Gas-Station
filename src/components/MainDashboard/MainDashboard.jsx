import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainDashboard from '../../styles/MainDashboard.css';
import CommonSection from "../UI/CommonSection";
import { Link, NavLink } from "react-router-dom";
import ava1 from '../../assets/all-images/ava-1.jpg';
// import Employees from '../Dash/Employee';

function Dashboar() {
  const navigate = useNavigate();
  const navigateToCustomer = () => {
    //  navigate to /Customer
    navigate('/Employee');
  };
  const navigateToEmployee = () => {
      //  navigate to /Customer
      navigate('/Dashboard');
    };

  return (
    <div>
      <CommonSection title="Dashboard " />
      <div class="section-title">
    <br/>
    <br/>

          <br/>
        </div>

      <div className='container'>
      <br />
      <br />
      <div className='row'>
      <div className='col-sm-2'></div>
        <div className='col-sm-3'>
        <button onClick={navigateToEmployee} class="image-button">
        <i class="ri-team-fill"></i>
        <span>Employeee</span>
    </button>
        {/* <Link to="/Dashboard" className=" d-flex align-items-center gap-1, Emp"  >
                  <h1 className='emp-text'>Employee</h1> 
                </Link> */}
        {/* <Link to="/Employees" className=" d-flex align-items-center gap-1"> 
        <button className="myButton" variant="primary" >
        Employee
      </button>
      </Link> */}

      
        </div>
        
        
        <div className='col-sm-1'></div>
        <div className='col-sm-3'>
        <button onClick={navigateToCustomer} class="image-button">
        <i class="ri-group-fill"></i>
        <span>Customer</span>
    </button>
        {/* <Link to="/Employee" className=" d-flex align-items-center gap-1, Emp" >
                  <h1 className='cust-text'>Customer</h1> 
                </Link> */}

        {/* <button className="myButton" variant="primary" >
        Customer
      </button> */}

        </div>
        
        <div className='col-sm-2'></div>
        
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}


export default Dashboar