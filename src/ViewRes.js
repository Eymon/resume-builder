import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Resume.css';
import { UpdateRes} from './UpdateRes';
import Resume from './Resume';

export class ViewRes extends React.Component {
  state = {
    isUpdateOpen: false,
    resumeDetails: {
      first_name: "Juan",
      middle_name: "Pogi",
      last_name: "Tamad",
      email: "admin@email.com",
      birthday: "January 1, 1993",
      address: "Sa Puso Mo <3",
      phone: "09234567812"
    }
  }

  _onSubmit = (newDetails) => {
    this.setState({
      isUpdateOpen: false
    })

    console.log(newDetails)
  }

  render() {
    let updateResume
    let buttonText
    let resumeDetails = this.state.resumeDetails
    if (this.state.isUpdateOpen===false) {
      updateResume = <div />
      buttonText = "Update"
    } else {
      updateResume = <UpdateRes onSubmit={this._onSubmit} resumeDetails={resumeDetails}/>
      buttonText = "Cancel"
    }

    

    return (
      <div>
      <h1>{resumeDetails.last_name + ", " + resumeDetails.first_name + " " + resumeDetails.middle_name}</h1>
      <p>{resumeDetails.email}</p>
      <p>{resumeDetails.birthday}</p>
      <p>{resumeDetails.address}</p>
      <p>{resumeDetails.phone}</p>
      <button onClick={this._onClick}>{ buttonText }</button>
      { updateResume }
    </div>
    )
  }
  _onClick = () => {
    console.log(this.state.isUpdateOpen)
    if (this.state.isUpdateOpen === false) {
      this.setState({ isUpdateOpen: true })
    } else {
      this.setState({ isUpdateOpen: false })
    }
  }
}