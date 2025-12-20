// import React from "react";
// import pexel4 from '../../assets/pexel4.svg'
// import pexel5 from '../../assets/pexel5.svg'
// import pexel6 from '../../assets/pexel6.svg'
// import pexel7 from '../../assets/pexel7.svg'
// const OurProjects = () => {
//   return (
//     <section className="relative bg-blue-50 py-16 px-4 md:px-20 text-center">
//       {/* Title and Subtitle */}
//       <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Projects</h2>
//       <p className="text-gray-600 max-w-2xl mx-auto mb-10">
//         We know what buyers are looking for and suggest projects that will bring
//         clients top dollar for the sale of their homes.
//       </p>

//       {/* Project Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {/* Card 1 */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             src={pexel4}
//             alt="Consultation"
//             className="w-full h-48 object-cover rounded-md mb-4"
//           />
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//             Consultation
//           </h3>
//           <p className="text-gray-600 text-sm mb-4">
//             Project Name, Location
//           </p>
//           <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
//             See More
//           </button>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             src={pexel5}
//             alt="Design"
//             className="w-full h-48 object-cover rounded-md mb-4"
//           />
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">Design</h3>
//           <p className="text-gray-600 text-sm mb-4">
//             Project Name, Location
//           </p>
//           <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
//             See More
//           </button>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             src={pexel6}
//             alt="Marketing & Design"
//             className="w-full h-48 object-cover rounded-md mb-4"
//           />
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//             Marketing & Design
//           </h3>
//           <p className="text-gray-600 text-sm mb-4">
//             Project Name, Location
//           </p>
//           <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
//             See More
//           </button>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             src={pexel7}
//             alt="Consultation & Marketing"
//             className="w-full h-48 object-cover rounded-md mb-4"
//           />
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//             Consultation & Marketing
//           </h3>
//           <p className="text-gray-600 text-sm mb-4">
//             Project Name, Location
//           </p>
//           <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
//             See More
//           </button>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProjects;




import React, { useState, useEffect } from 'react';
import { projectAPI } from '../../services/api';

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectAPI.getProjects();
        setProjects(data.projects || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Check out some of our recent projects and success stories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-500">No projects found. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProjects;