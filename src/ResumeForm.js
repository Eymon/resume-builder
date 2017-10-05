import React, { Component } from 'react';
import './ResumeForm.css';

class ResumeBuilder extends Component {
  render() {
    return (
      <div className="ResumeBuilder">
      <form>
      <h1>UPDATE RESUME</h1>
      <br />
      <input className="FirstName" type="text" placeholder="First Name"/>
      <br />
      <input className="MiddleName" type="text" placeholder="Middle Name"/>
      <br />
      <input className="LastName" type="text" placeholder="Last Name"/>
      <br />
      <input className="Email" type="text" placeholder="Email Address"/>
      <br />
      <input className="BirthDay" type="text" placeholder="Birth Date"/>
      <br />
      <input className="Address" type="text" placeholder="Address"/>
      <br />
      <input className="Phone" type="text" placeholder="Phone Number"/>
      <button>Submit</button> 
      </form>  
      </div>
    );
  }
}
export default ResumeBuilder;