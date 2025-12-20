import React from "react";

const Suscribe = () => {
  return (
    <nav className="bg-blue-800 text-white py-4 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          <li>
            <a href="#home" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-200">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-200">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          <span className="mr-2">Subscribe Us</span>
          <input
            type="email"
            placeholder="Enter Email Address"
           className="p-2 rounded-l-md text-black placeholder:text-black w-full md:w-auto"
          />
          <button className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-r-md hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Suscribe;