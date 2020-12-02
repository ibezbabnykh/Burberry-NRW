export const fetchData = async (url, method = 'GET', body = null, headers = {}) => {
  if (body) {
    body = JSON.stringify(body);
    headers['Content-Type'] = 'application/json;charset=utf-8'
  }

  try {
    const res = await fetch(`${url}`, {
      method,
      headers,
      body
    });

    const data = await res.json();

    return data;
  } catch (e) {
    return e.name;
  }
}