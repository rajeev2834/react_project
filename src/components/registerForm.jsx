import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi-browser';


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

    doSubmit = () => {
        console.log("submitRegister");
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
 
export default RegisterForm;