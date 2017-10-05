import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Resume.css';

export const AddRes = () => (
    <div className="ResumeBuilder">
      <form>
      <h1>CREATE RESUME</h1>
      <label>First Name</label><br />
      <input className="FirstName" type="text" placeholder="First Name"/>
      <br />
      <label>Middle Name</label><br />
      <input className="MiddleName" type="text" placeholder="Middle Name"/>
      <br />
      <label>Last Name</label><br />
      <input className="LastName" type="text" placeholder="Last Name"/>
      <br />
      <label>Email Address</label><br />
      <input className="Email" type="text" placeholder="Email Address"/>
      <br />
      <label>Birth Date</label><br />
      <input className="BirthDay" type="text" placeholder="Birth Date"/>
      <br />
      <label>Address</label><br />
      <input className="Address" type="text" placeholder="Address"/>
      <br />
      <label>Phone Number</label><br />
      <input className="Phone" type="text" placeholder="Phone Number"/>
      <br />
      <button className="buttonFormSave">Submit</button>
      <button className="buttonCancel">Cancel</button>
      </form>  
      </div>
)