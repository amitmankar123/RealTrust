// import React, { useState, useEffect } from 'react';
// import { projectAPI } from "../../services/api.js";

// const Dashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     image: null
//   });

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const data = await projectAPI.getProjects();
//       setProjects(data.projects || []);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('description', formData.description);
//       if (formData.image) {
//         formDataToSend.append('image', formData.image);
//       }

//       await projectAPI.createProject(formDataToSend);
//       alert('Project created successfully!');
//       fetchProjects(); // Refresh the list
//       setFormData({ name: '', description: '', image: null });
//     } catch (error) {
//       console.error('Error creating project:', error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
//       {/* Add Project Form */}
//       <div className="bg-white p-6 rounded-lg shadow mb-8">
//         <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Project Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
//               required
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
//               rows="3"
//               required
//             ></textarea>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Project Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleInputChange}
//               accept="image/*"
//               className="mt-1 block w-full"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             disabled={loading}
//           >
//             {loading ? 'Adding...' : 'Add Project'}
//           </button>
//         </form>
//       </div>

//       {/* Projects List */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Projects</h2>
//         {loading ? (
//           <p>Loading projects...</p>
//         ) : projects.length === 0 ? (
//           <p>No projects found. Add one above!</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <div key={project._id} className="border rounded-lg overflow-hidden">
//                 {project.image && (
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-48 object-cover"
//                   />
//                 )}
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{project.name}</h3>
//                   <p className="text-gray-600">{project.description}</p>
//                   <div className="mt-4 flex space-x-2">
//                     <button className="text-blue-500 hover:text-blue-700">Edit</button>
//                     <button className="text-red-500 hover:text-red-700">Delete</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// // In your Dashboard.jsx
// const [clientForm, setClientForm] = useState({
//   name: '',
//   designation: '',
//   description: '',
//   image: null,
//   socialLinks: {
//     linkedin: '',
//     twitter: ''
//   }
// });

// const handleClientSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const formData = new FormData();
//     Object.entries(clientForm).forEach(([key, value]) => {
//       if (key === 'socialLinks') {
//         formData.append('socialLinks', JSON.stringify(value));
//       } else if (value) {
//         formData.append(key, value);
//       }
//     });

//     await clientAPI.createClient(formData);
//     alert('Client added successfully!');
//     // Reset form
//     setClientForm({
//       name: '',
//       designation: '',
//       description: '',
//       image: null,
//       socialLinks: { linkedin: '', twitter: '' }
//     });
//   } catch (error) {
//     console.error('Error creating client:', error);
//     alert(error.message);
//   }
// };


// export default Dashboard;

import React, { useState } from 'react';
import { projectAPI, clientAPI } from '../../services/api';

const Dashboard = () => {
  // Project form state
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    image: null
  });

  // Client form state
  const [clientForm, setClientForm] = useState({
    name: '',
    designation: '',
    description: '',
    image: null,
    socialLinks: {
      linkedin: '',
      twitter: ''
    }
  });

  // Active tab state
  const [activeTab, setActiveTab] = useState('projects');

  // Project form handlers
  const handleProjectInputChange = (e) => {
    const { name, value, files } = e.target;
    setProjectForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', projectForm.name);
      formData.append('description', projectForm.description);
      if (projectForm.image) {
        formData.append('image', projectForm.image);
      }

      await projectAPI.createProject(formData);
      alert('Project created successfully!');
      setProjectForm({ name: '', description: '', image: null });
    } catch (error) {
      console.error('Error creating project:', error);
      alert(error.message);
    }
  };

  // Client form handlers
  const handleClientInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('socialLinks.')) {
      const [, socialKey] = name.split('.');
      setClientForm(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialKey]: value
        }
      }));
    } else {
      setClientForm(prev => ({
        ...prev,
        [name]: e.target.files ? e.target.files[0] : value
      }));
    }
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(clientForm).forEach(([key, value]) => {
        if (key === 'socialLinks') {
          formData.append('socialLinks', JSON.stringify(value));
        } else if (value) {
          formData.append(key, value);
        }
      });

      await clientAPI.createClient(formData);
      alert('Client added successfully!');
      setClientForm({
        name: '',
        designation: '',
        description: '',
        image: null,
        socialLinks: { linkedin: '', twitter: '' }
      });
    } catch (error) {
      console.error('Error creating client:', error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      {/* Tabs */}
      <div className="flex border-b mb-8">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'projects' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'clients' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('clients')}
        >
          Clients
        </button>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                name="name"
                value={projectForm.name}
                onChange={handleProjectInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={projectForm.description}
                onChange={handleProjectInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Image</label>
              <input
                type="file"
                name="image"
                onChange={handleProjectInputChange}
                accept="image/*"
                className="mt-1 block w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Project
            </button>
          </form>
        </div>
      )}

      {/* Clients Tab */}
      {activeTab === 'clients' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
          <form onSubmit={handleClientSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Name</label>
              <input
                type="text"
                name="name"
                value={clientForm.name}
                onChange={handleClientInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Designation</label>
              <input
                type="text"
                name="designation"
                value={clientForm.designation}
                onChange={handleClientInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={clientForm.description}
                onChange={handleClientInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Image</label>
              <input
                type="file"
                name="image"
                onChange={handleClientInputChange}
                accept="image/*"
                className="mt-1 block w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
              <input
                type="url"
                name="socialLinks.linkedin"
                value={clientForm.socialLinks.linkedin}
                onChange={handleClientInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter URL</label>
              <input
                type="url"
                name="socialLinks.twitter"
                value={clientForm.socialLinks.twitter}
                onChange={handleClientInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Client
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;