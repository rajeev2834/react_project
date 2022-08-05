import React from 'react';
import {Navigate} from 'react-router-dom';
import Joi from 'joi-browser';
import Form from './form';
import { toast } from 'react-toastify';
import auth from '../services/authService';
import { withRouter } from './withRouter';
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

    doSubmit = async() => {
      try{
        const {data} = this.state;
        await auth.login(data.username, data.password);
        const {state} = this.props.location;
        window.location = state ? state.from : "/";
      }catch(ex){
        if(ex.response && ex.response.status === 400){
          toast.error(ex.response.data);
        }
      }
      
    };

    render() {

        if(auth.getCurrentUser()){
            return <Navigate to="/"/>;
        }
        
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
 
export default withRouter(LoginForm);