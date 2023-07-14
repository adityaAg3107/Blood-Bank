import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8000/api/v1/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `; // check if the user is authorized then make api call
  }
  return req;
});

export default API;
