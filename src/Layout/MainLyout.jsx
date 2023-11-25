import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import NavBar from "../Pages/Shared/Navber/Navber";

const Main = () => {

  const location = useLocation()
  console.log(location);
  const login = location.pathname.includes('login')
const singup = location.pathname.includes('signup')
  return (
    <div className="">
  {login||singup || <NavBar></NavBar>}
            <Outlet></Outlet>
            {login||singup || <Footer></Footer>}
  <div className="border-2">  
  </div>
      <Toaster />
     
    </div>
  );
};

export default Main;
