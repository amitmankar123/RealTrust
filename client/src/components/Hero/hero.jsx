import React from 'react';
import First from '../../assets/first.svg'
const Hero = () => {
  return (
   <div
  className="relative bg-cover bg-center h-screen"
  style={{
    backgroundImage:
     `url(${First})` }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="container mx-auto px-6 h-full flex items-center relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="text-white max-w-3xl">
        
        {/* Title in a row */}
        <div className="flex flex-wrap gap-4 mb-4 text-3xl md:text-5xl font-bold">
          <span>Consultation ,</span>
          
          <span>Design</span>
          <span>,</span>
          <span>Marketing</span>
        </div>

        {/* Description below */}
        <p className="text-lg md:text-xl text-gray-200 max-w-xl">
          We specialize in providing end-to-end digital services — from strategic consultations and creative design to performance-driven marketing that accelerates your brand's growth.
        </p>
        
      </div>
    
  

          <div className="bg-blue-900 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl mb-6">Get a Free Consultation</h2>
            <form className="space-y-4 w-80">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none" />
              <input type="email" placeholder="Enter Email Address" className="w-full p-2 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none" />
              <input type="tel" placeholder="Mobile Number" className="w-full p-2 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none" />
              <input type="text" placeholder="Area, City" className="w-full p-2 border border-gray-300 bg-transparent text-white rounded-md focus:outline-none" />
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md w-full mt-4">Get Quick Quote</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;