import React, { useState } from 'react';

function AddUpdateDeleteUsers() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
        'Authorization': 'Bearer ${accessToken}',
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

  const handleUpdate= (email) => {

    //get API url from the environment variables
    const apiURL = process.env.REACT_APP_API_URL

    //use fetch to make an API call and get a specific student (returns a promise)
    fetch(`${apiURL}/api/users/${email}`, {
        headers: {
          'Authorization': 'Bearer ${accessToken}',
        }
    })
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        console.log('successfully updated')
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .catch((error) => {
          console.log(error)
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
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${accessToken}',
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

export default AddUpdateDeleteUsers;
