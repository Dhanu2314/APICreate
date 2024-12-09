import axios from "axios";

const API_BASE_URL = "http://localhost:8004/api";  // Localhost URL, production madhe change karaycha

export const getData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
