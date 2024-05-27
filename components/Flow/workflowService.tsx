import axios from 'axios';

const API_BASE_URL = 'http://localhost:5009/api';  // Update the base URL to match your Flask backend configuration

export const createWorkflow = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/workflows`, data);
  return response.data;
};

export const getWorkflow = async (workflowId) => {
  const response = await axios.get(`${API_BASE_URL}/workflows/${workflow-Id}`);
  return response.data;
};

export const listWorkflows = async () => {
  const response = await axios.get(`${API_BASE_URL}/workflows`);
  return response.data;
};

export const deleteWorkflow = async (workflowId) => {
  const response = await axios.delete(`${API_BASE_URL}/workflows/${workflowId}`);
  return response.data;
};

export const saveWorkflow = async (workflowId, data) => {
  const response = await axios.put(`${API_BASE_URL}/workflows/${workflowId}`, data);
  return response.data;
};
