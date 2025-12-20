const API_URL = 'http://localhost:4000/api'; // Make sure this matches your backend URL

// Helper function to handle responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    const error = data.message || 'Something went wrong';
    throw new Error(error);
  }
  return data;
};

// Projects API
export const projectAPI = {
  createProject: async (formData) => {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      body: formData, // For file uploads, don't set Content-Type header
    });
    return handleResponse(response);
  },
  getProjects: async () => {
    const response = await fetch(`${API_URL}/projects`);
    return handleResponse(response);
  }
  // Add update and delete methods as needed
};

// Add similar objects for other APIs (clients, contacts, etc.)

// In services/api.js
export const clientAPI = {
  createClient: async (formData) => {
    const response = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      body: formData, // For file uploads
    });
    return handleResponse(response);
  },
  getClients: async () => {
    const response = await fetch(`${API_URL}/clients`);
    return handleResponse(response);
  }
};