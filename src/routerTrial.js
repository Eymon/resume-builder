import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Resume = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">View Resume</Link></li>
        <li><Link to="/about">Update Resume</Link></li>
        <li><Link to="/topics">Seacrh Resume</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={ViewRes}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const ViewRes = () => (
  <div>
    <h1>NAME HERE (Last Name, First Name Middle Name)</h1>
    <p>EMAIL ADDRESS HERE</p>
    <p>BIRTH DATE HERE</p>
    <p>PHONE NUMBER HERE</p>
    <p>ADDRESS HERE</p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Resume;