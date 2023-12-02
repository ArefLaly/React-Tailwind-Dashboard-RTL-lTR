import { useContext } from "react";
import { HttpContext } from "../context/http/http.context";
const useHttpService = () => {
  const { service } = useContext(HttpContext);
  return service;
};
export default useHttpService;
