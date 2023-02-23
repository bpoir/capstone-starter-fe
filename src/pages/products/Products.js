import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

import Header from "../../components/header/Header";

//import UserForm from "../../components/userForm/UserForm";
import GetProducts from "../../components/products/GetProducts";
import CreateTable from '../../components/createTable/CreateTable';

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
        fetch(`${apiURL}/api/products`)

            .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
            .then(products => {
                //programatically redirect to another route on success
                this.setState({ products });
                
            })


    }

    getHeadings = (data) => {
        return Object.keys(data[0]);
    }

    render() {
        return (
            <div className="Products">

                <Header />

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                </div>

                <h3 className="text-center" >Get Products</h3>
                <GetProducts
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />
                

                {this.state.products && (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4>Product Name</h4>
                            </div>
                            <div className="col">
                                <h4>Product Type</h4>
                            </div>
                            <div className="col">
                                <h4>Allergens</h4>
                            </div>
                            <div className="col">
                                <h4>Price</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/*call product type*/}
                            </div>
                            <div className="col">
                                {/*call product type*/}
                            </div>
                            <div className="col">
                                {/*call Allergens*/}
                            </div>
                            <div className="col">
                                {/*call Price*/}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Products


