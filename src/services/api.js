import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoibHVrZTA3IiwiaWF0IjoxNjE1MjIzMzI1LCJleHAiOjE2MTUyMjY5MjV9.tUgdB87LouC4eVuxhxwGTNyrNn3axZEjL2-BoufBRpY";

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export { api };