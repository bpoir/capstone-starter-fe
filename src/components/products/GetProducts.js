import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './GetProducts.css';

function GetProducts({handleSubmit}) {
    return (
            <div className="GetProducts container">

                
                <Form onSubmit={handleSubmit}>
                    
                    <Button variant="primary" type="submit">
                        View Current Stock
                    </Button>
                </Form>
            </div>
        )
}

export default GetProducts;