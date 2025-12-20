import React from 'react';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <img src={logo} alt="Real Trust Logo" className="h-10" />
      <div className="space-x-6">
        <a href="#" className=" text-blue-900 font-bold p-2 m-1 backdrop-blur-sm">Home</a>
        <a href="#" className=" text-blue-900 font-bold p-2 m-1 backdrop-blur-sm">About</a>
        <a href="#" className=" text-blue-900 font-bold p-2 m-1 backdrop-blur-sm">Services</a>
        <a href="#" className=" text-blue-900 font-bold p-2 m-1 backdrop-blur-sm">Projects</a>
        <a href="#" className=" text-blue-900 font-bold p-2 m-1 backdrop-blur-sm">Testimonials</a>
        <a href='/dashboard' className="bg-orange-500 text-white px-4 py-2 rounded font-bold p-2 m-1 backdrop-blur-sm">Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;