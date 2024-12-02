const API_BASE_URL = 'https://swapi.dev/api';

export const fetchData = async (route, id = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${route}/${id ? id : ''}`);
    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch ${route} data: ${error}`);
  }
};