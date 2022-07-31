import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi-browser';
import * as userService from '../services/userService';
import { toast } from 'react-toastify';
import { withRouter } from './withRouter';


class RegisterForm extends Form {
    
    state = {
        data : {username: "", password: "", name: ""},
        errors: {}
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password").min(8).max(30),
        name: Joi.string().required().label("Name")
    };

    doSubmit = async () => {
        try{
            await userService.register(this.state.data);
            toast.success("Registered successfully");
            this.props.navigate("/login");
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({errors});
            }
        }
        
    };

    render() { 
        
        return (
            <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={this.handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Register</h3>
                {this.renderInput("username", "Username", "email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("name", "Name")}
                <div className="d-grid gap-2 mt-3">
                    {this.renderButton("Sign Up")}
                </div>
              </div>
            </form>
          </div>
        );
    }
}
 
export default withRouter(RegisterForm);