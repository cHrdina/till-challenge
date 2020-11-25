const serverUrl = 'http://localhost:5000';

export const get = async (endpoint: string) => {
  try {
    const response = await fetch(serverUrl + endpoint);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('There was an issue while fetching API data:', error);
  }
};
