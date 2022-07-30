import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';
import "../App.css"

class LoginForm extends Form {

    state = {
        data:{username: "", password: ""},
        errors: {}
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };

    doSubmit = () => {
        console.log("submit");
    };

    render() { 
        return (
            <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={this.handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Login</h3>
                {this.renderInput("username", "Username", "email")}
                {this.renderInput("password", "Password", "password")}
                <div className="d-grid gap-2 mt-3">
                    {this.renderButton("Submit")}
                </div>
                <p className="forgot-password text-right mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </form>
          </div>
        );
    }
}
 
export default LoginForm;