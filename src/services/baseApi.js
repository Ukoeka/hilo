const base_url = 'https://holigisticz-server.onrender.com/api/'
export const fetchFromApi = async (url, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${base_url}${url}?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}; 

export  const postToApi = async (url, data) => {
  const response = await fetch(`${base_url}${url}`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};  





