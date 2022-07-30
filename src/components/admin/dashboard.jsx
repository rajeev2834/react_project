import React from "react";
import SideBar from "./sidebar";

import {
  Routes, 
  Route,
  Outlet, } 
  from 'react-router-dom';

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar/>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
