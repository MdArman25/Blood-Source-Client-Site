import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: "true",
});
const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
