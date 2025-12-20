import React from "react";

const AboutUs = () => {
  return (
    <section className="relative  py-16 px-4 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
      {/* Underline */}
      <div className="w-16 h-1 bg-blue-800 mx-auto mb-8"></div>
      {/* Text */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-8">
        Fifteen years of experience in real estate customer service and a
        commitment to work hard, listen, and follow through. We provide quality
        services to build relationships with clients and, more importantly,
        maintain these relationships by communicating effectively.
      </p>
      {/* Button */}
      <button className="bg-white text-blue-800 font-semibold py-2 px-6 border border-blue-800 rounded hover:bg-blue-100 transition">
        Learn More
      </button>
    </section>
  );
};

export default AboutUs;