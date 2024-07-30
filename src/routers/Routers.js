import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
// import LoginForm from "../components/LoginForm/LoginForm";
// import OurMembers from "../components/UI/OurMembers";
import Login from '../components/Formlogin/Login';
import Price from "../components/Pricingform/Pricing";
import Dashboard from '../components/Dash/Dashboard/Dashboard';
import MainDashboard from '../components/MainDashboard/MainDashboard';
import Employee from "../components/Dash/Employee";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Pricing" element={<Price />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/MainDashboard" element={<MainDashboard />} />
      <Route path="/Employee" element={<Employee />} />
      {/* <Route path="/Ma Awaan" element={<Maxaa />} />
     */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
