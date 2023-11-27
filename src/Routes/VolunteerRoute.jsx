// /* eslint-disable react/prop-types */


// import { Navigate, useLocation } from "react-router-dom";
// import Context from "../Hooks/useContext";
// import useAdmin from "../Hooks/useAdmin";
// import useVolunteer from "../Hooks/useVolunteer";
// import Loading from "../Components/Lodding";

// const VolunteerRoute = ({children}) => {
//   const { user, loading } = Context();
//   const [isVolunteer,isVolunteerLoading]=useVolunteer()
//   console.log(isVolunteer);
//   const location = useLocation();
//   console.log(location);
//   if (loading||isVolunteerLoading)
//     return (
//      <Loading></Loading>
//     );

//   if (user && isVolunteer?.isVolunteer) {
//       return children;
// }
// return <Navigate to="/" state={location.pathname} replace  />;

// };

// export default VolunteerRoute;
