import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users, refetch, isLoading} = useQuery({
        queryKey: ["Users"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get("/Users");
          console.log(res.data)
        return res.data
        },
      });
    return ([users,refetch,isLoading])
};

export default useUsers;