import React, { Component } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Movies from './components/movies';
import NavBar from './components/navbar';
import { Route,
         Routes,
        Navigate } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import auth from './services/authService';
import ProtectedRoute from './components/common/protectedRoute';
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

class App extends Component {
    state = {
        
    }

    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }

    render() { 
        const { user } = this.state;
        return (
            <div>
                <ToastContainer />
                <NavBar user={user}/>
                <div className="content">
                    <Routes>
                        <Route path="/registerForm" element={<RegisterForm/>}></Route>
                        <Route path="/login" element={<LoginForm/>}></Route>
                        <Route path="/logout" element={<Logout/>}></Route>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="/movies/:id" element={<MovieForm/>}></Route>
                        </Route>
                        <Route path="/movies" 
                           element={<Movies user={user}/>}>
                        </Route>
                        <Route path="/customers" element={<Customers/>} />
                        <Route path="/rentals" element={<Rentals/>} />
                        <Route path="/" element={<Navigate replace to = "/movies"/>} />
                        <Route path="/not-found" element={<NotFound/>} />
                    
                        <Route path="*" element={<Navigate to = "/not-found" />} />
                    </Routes>
                </div>
                
            </div>
    );
    }
}
 
export default App;