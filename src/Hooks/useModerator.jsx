import { useQuery } from "@tanstack/react-query";
import Context from "./useContext";
import useAxiosSecure from "./useAxiosSecure";

const useVolunteer = () => {
  const { user, lodding } = Context();
  // const [volunteer,setvolunteer]=useState()
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const { data: isVolunteer, isLoading: isVolunteerLoading } = useQuery({
    queryKey: ["requestvolunteer", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/volunteer/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [isVolunteer, isVolunteerLoading];
};

export default useVolunteer;
