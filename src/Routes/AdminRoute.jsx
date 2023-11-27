/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";
import Context from "../Hooks/useContext";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
  const { user, loading } = Context();
  const [isAdmin,isAdminLoading]=useAdmin()
  console.log(isAdmin,isAdminLoading);
  const location = useLocation();
  console.log(location);
  if (loading||isAdminLoading)
    return (
      <div className="flex justify-center items-center mx-auto mt-20">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );

  if (user && isAdmin?.isAdmin) {
      return children;
}
return <Navigate to="/" state={location.pathname} replace  />;

};

export default AdminRoute;
