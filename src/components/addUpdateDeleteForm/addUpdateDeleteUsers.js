import React, { useState } from 'react';
import { connect } from "react-redux";
import AuthService from "../../authService";
import * as authActions from "../../redux/actions/auth";

function AddUpdateDeleteUsers(props) {

  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdd = () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if(response.ok){
        console.log('Successfully added');
      } else {
        console.log('Unsuccessfully added')
      }
      })
      .catch((error) =>{
        console.log('Error adding user', error);

      });
  };

  const handleUpdate= () => {

  

    const data = {
      firstName,
      lastName,
      password,
    };
    //get API url from the environment variables
    const apiURL = process.env.REACT_APP_API_URL
    
    fetch(`${process.env.REACT_APP_API_URL}/api/users/${email}`, {
      method: 'PUT', 
      headers: { 
        'Content-Type': 'application/json',},
        body: JSON.stringify(data),
      })
      .then((response) => {
        if(response.ok){
          console.log('Successfully updated');
        } else {
          console.log('Unsuccessfully updated')
        }
        })
        .catch((error) =>{
          console.log('Error updating user', error);
        });

};

  const handleDelete  = () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/users/${email}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if(response.ok){
        console.log('Successfully deleted');
      } else {
        console.log('Unsuccessfully deleted')
      }
      })
      .catch((error) =>{
        console.log('Error deleting user', error);
      });
    
  };

  return (
    <form>
      <label> 
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email Address:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps
)(AddUpdateDeleteUsers);
