import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

// api.defaults.headers.common["Authorization"] = `Bearer `;

export { api };