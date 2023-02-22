import React, { useState } from 'react';

function AddUpdateDeleteProducts() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [allergens, setAllergens] = useState('');
  const [price, setPrice] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleAllergensChange = (event) => {
    setAllergens(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
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
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Type:
        <input type="text" value={type} onChange={handleTypeChange} />
      </label>
      <br />
      <label>
        Allergens:
        <input type="text" value={allergens} onChange={handleAllergensChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
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

export default AddUpdateDeleteProducts;
