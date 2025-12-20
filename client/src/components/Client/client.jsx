
//import React from "react";
import pexel2 from '../../assets/pexel2.svg'
import pexel3 from '../../assets/pexel3.svg'
import pexel4 from '../../assets/pexel4.svg'


// const ClientGallery = () => {
//   return (
//     <section className="relative bg-white py-20 px-4 md:px-20 overflow-hidden">
//     {/* Top Left Circle */}
// <div className="absolute top-10 left-0 w-36 h-36 bg-blue-200 rounded-full opacity-30 z-0" />

// {/* Middle Right Circle */}
// <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 z-0" />

// {/* Rectangle Dot Grid */}
// <div className="absolute top-10 right-10 grid grid-cols-6 gap-1 opacity-40 z-0">
//   {Array.from({ length: 24 }).map((_, i) => (
//     <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
//   ))}
// </div>

// {/* Extra Circle - Center */}
// <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-200 rounded-full opacity-30 z-0" />

// {/* Bottom Left Semi-circle */}
// <div className="absolute bottom-0 left-0 w-20 h-10 bg-purple-200 rounded-t-full opacity-30 z-0" />

// {/* Bottom Right Semi-circle */}
// <div className="absolute bottom-0 right-0 w-24 h-12 bg-pink-200 rounded-t-full opacity-30 z-0" />



//       {/* Image Grid */}
// <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10">
  
//   {/* Left Image - outer border effect + lifted position */}
//  <div className="relative w-[120px] h-[120px] md:-mt-[40px]">
//     <img
//       src={pexel4}
//       alt="Handshake"
//       className="w-full h-full object-cover  shadow-2xl"
//     />
//     {/* Bottom-Left corner border (outside) */}
//     <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-orange-400 rounded-sm" />
//   </div>


//  {/* Center Image — larger, border top-right (farther from center) */}
//   <div className="relative w-[240px] h-[240px]">
//     <img
//       src={pexel3}
//       alt="Client tour"
//       className="w-full h-full object-cover shadow-2xl"
//     />
//     {/* Top-Right corner border (larger & offset) */}
//     <div className="absolute -top-4 -right-4 w-6 h-6 border-t-4 border-r-4 border-blue-600" />
//     {/* Optional design blob */}
//     <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 opacity-30 -z-10" />
//   </div>

//   {/* Right Image — bottom-right border, no rounded */}
//   <div className="relative w-[120px] h-[120px] md:mt-[120px]">
//     <img
//       src={pexel2}
//       alt="Client meeting"
//       className="w-full h-full object-cover shadow-2xl"
//     />
//     {/* Bottom-Right corner border */}
//     <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-orange-400" />
//   </div>
// </div>
// </section>
//   );
// };

// export default ClientGallery;


// src/components/Clients/Clients.jsx
// src/components/Client/client.jsx
import React, { useState, useEffect } from 'react';
import { clientAPI } from '../../services/api';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await clientAPI.getClients();
        console.log('Clients data:', data);
        setClients(data.clients || []);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading clients...</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by businesses and individuals worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {clients.length > 0 ? (
          clients.map((client) => (
            <div 
              key={client._id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {client.image && (
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {client.name}
                  </h3>
                  <p className="text-blue-600">{client.designation}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <div className="flex space-x-4">
                {client.socialLinks?.linkedin && (
                  <a 
                    href={client.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {client.socialLinks?.twitter && (
                  <a 
                    href={client.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-500">No clients found. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;