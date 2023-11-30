import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "https://assignment-server-plum.vercel.app",
  withCredentials: "true",
});
const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
