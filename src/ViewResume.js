import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './ViewResume.css'

const Resume = () => (
  <Router>
    <div>
        <ul>
            <li><Link to="/">View Resume</Link></li>
            <li><Link to="/AddResume">Add Resume</Link></li>
            <li><Link to="/Search">Search Resume</Link></li>
        </ul>

    <hr/>

    <Route exact path="/" component={ViewRes}/>
    <Route path="/AddResume" component={AddRes}/>
    <Route path="/Search" component={SearchRes}/>
    </div>
  </Router>
)
const ViewRes = () => (
  <Router>
  <div>
    <h1>NAME HERE (Last Name, First Name Middle Name)</h1>
    <p>EMAIL ADDRESS HERE</p>
    <p>BIRTH DATE HERE</p>
    <p>PHONE NUMBER HERE</p>
    <p>ADDRESS HERE</p>
    <Link to="/UpdateResume">Update Resume</Link>
    <Route path="/UpdateResume" component={UpdateRes}/>
  </div>
  </Router>
)
const SearchRes = () => (
  <div>
    <form>
    <input className="textBoxSearch" type="text" placeholder="Person Name"/>
    <button className="buttonSearchSubmit">Search</button>
    </form>
    <h1>Display the search results here.</h1>
  </div>
)
const AddRes = () => (
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
const UpdateRes = () => (
  <div>
    <div className="ResumeBuilder">
      <form>
      <h1>UPDATE RESUME</h1>
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
      <button className="buttonFormSave">Save</button>
      <button className="buttonCancel">Cancel</button>
      </form>  
      </div>
  </div>
)

export default Resume;