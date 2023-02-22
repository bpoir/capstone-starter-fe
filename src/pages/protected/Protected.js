import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddUpdateDeleteUsers from "../../components/addUpdateDeleteForm/addUpdateDeleteUsers";
import AddUpdateDeleteProducts from "../../components/addUpdateDeleteForm/addUpdateDeleteProducts";

class Protected extends Component {
    state= {showUserForm: false, showProductForm: false}

showUserForm = () => {
  return this.state.showUserForm ? <AddUpdateDeleteUsers /> : null;
}

showProductForm = () => {
    return this.state.showProductForm ? <AddUpdateDeleteProducts /> : null;
}

render() {
  return (
    <div className="Protected">
      <Header isAuthenticated={this.props.isAuthenticated} />
      <div className="container">
        <h2>Admin Page</h2>
        <div class="row">
          <div class="col ms-5">
            <button onClick={() => this.setState(prevState => ({showUserForm: !prevState.showUserForm}))}>Add/Manage Users</button>
          </div>
          <div class="col">
            <button onClick={() => this.setState(prevState => ({showProductForm: !prevState.showProductForm}))}>Add/Manage Products</button>
          </div>
        </div>
        {this.showUserForm()}
        {this.showProductForm()}
      </div>
    </div>
  );
}

}



export default mustBeAuthenticated(Protected);