

export async function get(apiBaseUrl, endpoint) {
    try {
      const response = await fetch(`${apiBaseUrl}/${endpoint}`);
      return handleResponse(response);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }
  
  
  async function handleResponse(response) {
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `API request failed with status ${response.status}: ${errorMessage}`
      );
    }
    const data = await response.json();
    return data;
  }