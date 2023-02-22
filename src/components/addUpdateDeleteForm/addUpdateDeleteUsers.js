import React, { useState } from 'react';

function AddUpdateDeleteUsers() {
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
    
  };

  const handleUpdate = () => {
   
  };

  const handleDelete = () => {
    
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
