import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Resume.css';
import { ViewRes} from './ViewRes';
import { UpdateRes} from './UpdateRes';
import { AddRes} from './AddRes';
import { SearchRes} from './SearchRes';

class Resume extends React.Component {

    render() {
        let updateResume = <UpdateRes />
    
        return (
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
    }

    _onClick = () => {
      console.log('clicked')
    }
}
export default Resume;