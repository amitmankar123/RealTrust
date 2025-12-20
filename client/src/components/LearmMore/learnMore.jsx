import React from "react"
import Rectangle from "../../assets/Rectangle.svg";


const LearnMore = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12 px-4 md:px-20 text-center"
      style={{
        backgroundImage: `url(${Rectangle})`,
        
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <p className="text-lg font-bold md:text-xl max-w-3xl mx-auto mb-4">
          Learn more about our listing process, as well as our additional staging
          and design work.
        </p>
        <button className="bg-white text-blue-800 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default LearnMore;