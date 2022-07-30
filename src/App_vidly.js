import React, { Component } from 'react';
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
import "./App.css"

class App extends Component {

    render() { 
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}></Route>
                        <Route path="/registerForm" element={<RegisterForm/>}></Route>
                        <Route path="/movies/:id" element={<MovieForm/>}></Route>
                        <Route path="/movies" element={<Movies/>} />
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