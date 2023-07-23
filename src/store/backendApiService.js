import axios from "axios";

export const backendApiService = axios.create({
  baseURL: 'https://localhost:8080/api'
})
