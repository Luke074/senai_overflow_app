import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoibHVrZTA3IiwiaWF0IjoxNjE0OTc0MDI2LCJleHAiOjE2MTQ5Nzc2MjZ9.Yz7g7voN6Yt-j1-1nM3ep0apoaCqR02xkSR4bYKG0eA";

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export { api };