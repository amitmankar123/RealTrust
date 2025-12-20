import React from "react";
import { FaHome, FaPencilAlt, FaBullhorn } from "react-icons/fa";

const Choose = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
        Why Choose Us?
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 - ROI */}
        <div className="flex flex-col items-center text-gray-600">
          <FaHome className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Potential ROI
          </h3>
          <p className="text-sm max-w-xs">
            Maximize your return by making key development or updates to your
            current home before selling, and we’ll lead you through potential
            value-boosting strategies.
          </p>
        </div>

        {/* Card 2 - Design */}
        <div className="flex flex-col items-center text-gray-600">
          <FaPencilAlt className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Design</h3>
          <p className="text-sm max-w-xs">
            Our team guides through the design process and coordinates with
            contractors to streamline the home upgrade.
          </p>
        </div>

        {/* Card 3 - Marketing */}
        <div className="flex flex-col items-center text-gray-600">
          <FaBullhorn className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Marketing
          </h3>
          <p className="text-sm max-w-xs">
            Targeting your market, creating the message, and implementing a
            full marketing plan using every tool in today’s business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Choose;
