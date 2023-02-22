import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GetProducts({handleSubmit}) {
    return (
            <div className="GetProducts container">

                
                <Form onSubmit={handleSubmit}>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
}

export default GetProducts;