import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Protected extends Component {

    render() {
        return (
            <div className="Protected">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    <h2>Admin Page</h2>
                    <div class="row">
                    <div class="col ms-5">
                        <button /*</div>onclick={ this.getForm }*/>Add/Manage Users</button>
                    </div>
                    <div class="col">
                        <button /*</div>onclick={ this.getForm }*/>Add/Manage Products</button>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}



export default mustBeAuthenticated(Protected);