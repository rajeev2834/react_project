import React, { Component } from 'react';
import {
    Routes, 
    Route, 
    Navigate} 
    from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Products from './components/products';
import Posts from './components/posts';
import Dashboard from './components/admin/dashboard';
import './App.css';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import Users from './components/admin/users';
import AdminPosts from './components/admin/posts';

class App extends Component {
    render() { 
        return (
            <div>
                <NavBar />
                <div className="content">
                <Routes>
                    <Route path="/products/:id" element={<ProductDetails/>}></Route>
                    <Route path="/products" 
                        element = {<Products sortBy = "newest"/>}/>
                        <Route path="/posts/:year">
                            <Route path=":month" element={<Posts/>}/>
                            <Route path="" element={<Posts/>}/>
                        </Route>
                    <Route path="/admin" element={<Dashboard/>}>
                        <Route path="/admin/users" element={<Users/>} />
                        <Route path="/admin/posts" element={<AdminPosts/>} />
                    </Route>
                    <Route path="/not-found" element={<NotFound/>}></Route>
                    <Route path="/" element={<Home/>} />
                    <Route path="/messages" element={<Navigate replace to = "/posts/2022/"/>} />
                    <Route path="*" element={<Navigate to = "/not-found" />} />
                    

                </Routes>
                </div>
            </div>
        );
    }
}
 
export default App;
