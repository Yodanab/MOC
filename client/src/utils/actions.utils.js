export const callFetch = (url, method, body) => {
  const isFormData = body instanceof FormData;
  if (!isFormData) {
    body = JSON.stringify(body);
  }
  return fetch(url, {
    method: method,
    cache: "no-cache",
    headers: getHeaders(isFormData),
    body,
  }).then((res) => Promise[res.ok ? "resolve" : "reject"](res.json()));
};

const getHeaders = (isFormData = false) => {
  const headers = new Headers();
  const token = localStorage.getItem("token");
  if (token) {
    headers.append("auth-token", `${token}`);
  }
  if (!isFormData) {
    headers.append("Content-Type", "application/json");
  }
  return headers;
};

export const URL = "http://localhost:5000";
