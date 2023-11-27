// import { useQuery } from "@tanstack/react-query";
// import Context from "./useContext";
// import useAxiosSecure from "./useAxiosSecure";


// const useVolunteer = () => {
//   const { user } = Context();
 
//   const axiosSecure = useAxiosSecure();

//   console.log(user);
//   const { data: isVolunteer, isLoading: isVolunteerLoading } = useQuery({
//     queryKey: ["requestisVolunteer", user?.email],

//     queryFn: async () => {
//       const res = await axiosSecure.get(`/moderator/${user?.email}`);
//       console.log("volender asese", res.data);
//       return res.data;
//     },
//   });
//   return [isVolunteer, isVolunteerLoading];
// };

// export default useVolunteer;
