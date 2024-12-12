const base_url = 'https://holigisticz-server.onrender.com/api/'
export const fetchFromApi = async (url, params = {}, contentType = "application/json") => {
  const token = sessionStorage.getItem('MVtoken');
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${base_url}${url}${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": contentType,
      "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const postToApi = async (url, data, contentType = "application/json") => {
  const token = sessionStorage.getItem('MVtoken');
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  // Avoid setting Content-Type for FormData
  if (contentType !== 'multipart/form-data') {
    headers['Content-Type'] = contentType;
  }

  const body =
    contentType === "application/x-www-form-urlencoded"
      ? new URLSearchParams(data).toString()
      : contentType === "multipart/form-data"
        ? data
        : JSON.stringify(data);

  const response = await fetch(`${base_url}${url}`, {
    method: "POST",
    headers: headers,
    body: body,
  });

  const result = await response.json();
  return result;
};

export const patchToApi = async (url, data, contentType = "application/json") => {
  const token = sessionStorage.getItem('MVtoken');

  const headers = {
    "Authorization": `Bearer ${token}`
  };

  // If it's multipart/form-data, let the browser set the Content-Type with the boundary
  if (contentType !== 'multipart/form-data') {
    headers['Content-Type'] = contentType;
  }

  const response = await fetch(`${base_url}${url}`, {
    method: "PATCH",
    headers: headers,
    body: contentType === "application/x-www-form-urlencoded"
      ? new URLSearchParams(data).toString()
      : (contentType === 'multipart/form-data' ? data : JSON.stringify(data)),
  });


  const result = await response.json();
  return result;
};

export const deleteFromApi = async (url) => {
  const token = sessionStorage.getItem('MVtoken');
  const response = await fetch(`${base_url}${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};







