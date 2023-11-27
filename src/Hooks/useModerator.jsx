// import { useQuery } from "@tanstack/react-query";
// import Context from "./useContext";
// import useAxiosSecure from "./useAxiosSecure";


// const useModerator = () => {
//   const { user } = Context();
//   // const [Moderator,setModerator]=useState()
//   const axiosSecure = useAxiosSecure();
//   console.log(user);
//   const { data: isModerator, isLoading: isModeratorLoading } = useQuery({
//     queryKey: ["requestModerator", user?.email],

//     queryFn: async () => {
//       const res = await axiosSecure.get(`/moderator/${user?.email}`);
//       console.log(res.data);
//       return res.data;
//     },
//   });
//   return [isModerator, isModeratorLoading];
// };

// export default useModerator;