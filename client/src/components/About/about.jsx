import React from "react";
import Ellips from '../../assets/Ellipse 13.svg'
import Ellip2 from '../../assets/Ellipse 12.svg'
import Ellip3 from '../../assets/Ellipse 11.svg'
const About = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 relative">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Not Your Average Realtor
        </h2>
        <p className="text-gray-600 max-w-md">
          Most realtors are only for selling property. We focus on connecting design and marketing to get the most value for your home.
        </p>
      </div>

    {/* Right Circular Image Section */}
<div className="relative w-full md:w-1/2 h-[350px] md:h-[420px] flex items-center justify-center">
  {/* Center Large Image */}
  <img
    src={Ellip3}
    alt="Main Realtor"
    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg z-10"
  />

  {/* Top Right Small Image */}
  <img
    src={Ellip2}
    alt="Happy Couple"
    className="absolute top-0 right-4 md:right-16 w-38 h-38 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
  />

  {/* Bottom Right Small Image */}
  <img
    src={Ellips}
    alt="Model House"
    className="absolute bottom-0 right-6 md:right-20 w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
  />

  {/* Blue Dot */}
  <div className="absolute top-4 left-2 w-4 h-4 bg-blue-600 rounded-full"></div>

  {/* Orange Dot */}
  <div className="absolute bottom-4 left-10 w-3.5 h-3.5 bg-orange-500 rounded-full"></div>

  
</div>

    </section>
  );
};

export default About;
