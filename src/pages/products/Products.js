import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

import Header from "../../components/header/Header";

//import UserForm from "../../components/userForm/UserForm";
import GetProducts from "../../components/products/GetProducts";

class Products extends Component {

    state = {
        errorMessage: null,
        formData: {
            productName: "",
            productType: "",
            productAllergens: "",
            productPrice: ""
        }
    }

    //method that handles updating the data in state that matches the data in the form
    //runs everytime a form field changes
    

    //run when the form is submitted
    handleSubmit = (event) => {

        //prevent the form from refreshing the page
        event.preventDefault();

        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL
        
        //use fetch to make a POST request with the Data from state that has been populated from
        //the data in the form
        fetch(`${apiURL}/api/products`, {
            method: "GET", //make sure whe set our method to POST when creating records
            headers: {
                'accept': 'application/json' //make sure we set the content-type headers so the API knows it is recieveing JSON data
             },
            // body: JSON.stringify(this.state.formData) //send our data form state int he body of the request
        })
        .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
        .then((data) => {
            const message = "Pulled Product Data"
            //programatically redirect to another route on success
            this.props.history.push(`/products?message=${message}`)
            console.log(data)
            this.setState({
                formData: {...this.state.formData, ...data}
            });
        })
        
        .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail

    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const flashMessage = params.get('message');
        return (
            <div className="Products">

                <Header/>

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {flashMessage && <Alert variant="info">{flashMessage}</Alert>}
                </div>
                
                <h3 className="text-center" >Get Products</h3>
                <GetProducts
                    
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

            </div>
        )
    }
}

export default Products