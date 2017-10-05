import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Resume.css';
export class UpdateRes extends React.Component {
    state = {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        birthday: "",
        address: "",
        phone: ""
    }

    componentDidMount(){
        let first_name = this.props.resumeDetails.first_name
        let middle_name = this.props.resumeDetails.middle_name
        let last_name = this.props.resumeDetails.last_name
        let email = this.props.resumeDetails.email
        let birthday = this.props.resumeDetails.birthday
        let address = this.props.resumeDetails.address
        let phone = this.props.resumeDetails.phone

        this.setState({
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            email: email,
            birthday: birthday,
            address: address,
            phone: phone
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let newDetails = this.state
              
        this.props.onSubmit(newDetails)
      }

    handleChanges = (event) => {
        let context = event.target

        switch (context.name) {
            case 'first_name':
                this.setState({first_name: context.value})
                break;
        
            case 'middle_name':
                this.setState({middle_name: context.value})
                break;
            default:
                break;
        }
        // if (context.name === 'first_name') {
        //     this.setState({first_name: context.value})
        // }
    }
    render(){
        return(
            <div className="ResumeBuilder">
                <form onSubmit={this.handleSubmit}>
                    <h1>UPDATE RESUME</h1>
                    <label>First Name</label><br />
                    <input className="FirstName" name="first_name" type="text" value={this.state.first_name} onChange={this.handleChanges}/>
                    <br />
                    <label>Middle Name</label><br />
                    <input className="MiddleName" name="middle_name" type="text" value={this.state.middle_name} onChange={this.handleChanges}/>
                    <br />
                    <label>Last Name</label><br />
                    <input className="LastName" name="last_name" type="text" value={this.state.last_name} onChange={this.handleChanges}/>
                    <br />
                    <label>Email Address</label><br />
                    <input className="Email" name="email" type="text" value={this.state.email} onChange={this.handleChanges}/>
                    <br />
                    <label>Birth Date</label><br />
                    <input className="BirthDay" name="birthday" type="text" value={this.state.birthday} onChange={this.handleChanges}/>
                    <br />
                    <label>Address</label><br />
                    <input className="Address" name="address" type="text" value={this.state.address} onChange={this.handleChanges}/>
                    <br />
                    <label>Phone Number</label><br />
                    <input className="Phone" name="phone" type="text" value={this.state.phone} onChange={this.handleChanges}/>
                    <br />
                    <input type="submit" className="buttonFormSave" value="Submit" />
                    <button className="buttonCancel">Cancel</button>
                </form>
            </div>
        )
    }
}