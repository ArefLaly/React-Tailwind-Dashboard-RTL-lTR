import axios, { CanceledError } from "axios";
export const api = axios.create({
  baseURL: "http://172.20.20.9:80/rana-portal/public/api/",
  headers: {
    // 'content-type': 'application/json',
    "content-type": "multipart/form-data",
    Authorization: "Bearer " + localStorage.getItem("token"),
    withCredentials: true,
  },
});

export { CanceledError };
