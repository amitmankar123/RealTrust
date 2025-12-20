import React from "react";
import ellipse28 from '../../assets/Ellipse 28.svg'
import ellipse29 from '../../assets/Ellipse 29.svg'
import ellipse31 from '../../assets/Ellipse 31.svg'
import ellipse33 from '../../assets/Ellipse 33.svg'
import ellipse35 from '../../assets/Ellipse 35.svg'
const HappyClients = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-4 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 mb-12">Happy Clients</h2>

      {/* Client Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Client 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={ellipse29}
            alt="Razman Smith"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
          />
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-blue-800 font-semibold">Razman Smith</p>
        </div>

        {/* Client 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={ellipse31}
            alt="Shivam Kapur"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
          />
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-blue-800 font-semibold">Shivam Kapur</p>
        </div>

        {/* Client 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={ellipse33}
            alt="John Lopez"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
          />
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-blue-800 font-semibold">John Lopez</p>
        </div>

        {/* Client 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={ellipse35}
            alt="Marry Freeman"
            className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
          />
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-blue-800 font-semibold">Marry Freeman</p>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;