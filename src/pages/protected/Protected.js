import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
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
        <div className="row">
          <div className="col ms-5">
            <button onClick={() => this.setState(prevState => ({showUserForm: !prevState.showUserForm}))}>Add/Manage Users</button>
          </div>
          <div className="col">
            <button onClick={() => this.setState(prevState => ({showProductForm: !prevState.showProductForm}))}>Add/Manage Products</button>
          </div>
        </div>
        <div className="row">
          <div className="col ms-5">
            {this.showUserForm()}
          </div>
          <div className="col">
            {this.showProductForm()}
          </div>
        </div>
      </div>
    </div>
  );
}

}



export default mustBeAuthenticated(Protected);