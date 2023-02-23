import React, { useState } from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

function AddUpdateDeleteProducts() {
  const [productName, setProductName] = useState('');
  const [productType, setType] = useState('');
  const [productAllergens, setAllergens] = useState('');
  const [productPrice, setPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (event) => {
    setProductName(event.target.value);
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
    const data = {
        productName,
        productType,
        productAllergens,
        productPrice,
      };
      fetch(process.env.REACT_APP_API_URL + '/api/products',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
            console.log(response);
            setSuccessMessage('Product added succesfully.');
          
        })
        .catch((error)  =>{
  
        });
    };
  

  const handleUpdate = () => {
    const data = {
        productName,
         productType,
         productAllergens,
         productPrice,
       };
      fetch('${process.env.REACT_APP_API_URL}/${productName}', {
      metod: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if(response.ok){
        console.log('Successfully updated');
      } else {
        console.log('Unsuccessfully updated')
      }
    })
    .catch((error) => {
      console.log('Error updating product', error);
    });
     };
   
 

  const handleDelete = () => {
    fetch('${process.env.REACT_APP_API_URL}?productName=${productName}', {
      metod: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if(response.ok){
        console.log('Successfully deleted');
      } else {
        console.log('Unsuccessfully deleted')
      }
    })
    .catch((error) => {
      console.log('Error deleting product', error);
    });
  }
    
  return (
    <form>
      <label>
        Name:
        <input type="text" value={productName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Type:
        <input type="text" value={productType} onChange={handleTypeChange} />
      </label>
      <br />
      <label>
        Allergens:
        <input type="text" value={productAllergens} onChange={handleAllergensChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={productPrice} onChange={handlePriceChange} />
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
