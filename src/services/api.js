/**
 *
 * @param {*} API_URL
 * @returns
 */

import axios from "axios";

export const fetchUsers = async (url) => {
  try {
    // Send a GET request to the provided URL using axios
    const response = await axios.get(url);
    // Extract and return the data from the response
    return response.data;
  } catch (error) {
    // If an error occurs during the request, throw a new Error with a descriptive message
    throw new Error("Failed to fetch users");
  }
};
