import logo from "../../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import Context from "../../../Hooks/useContext";
import useAdmin from "../../../Hooks/useAdmin";
import useVolunteer from "../../../Hooks/useModerator";

const NavBar = () => {
  const { user, logOut, lodding } = Context();
  console.log(user);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isVolunteer, isVolunteerLoading] = useVolunteer();
  console.log(isAdmin, isVolunteer);
  // if(isAdminLoading){
  //   <p>Lodding</p>
  // }
  // console.log("admin ki asole ase naki",isAdmin,isAdminLoading,user,lodding);
  const HandlelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
          }
          to={"/"}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
          }
          to={"/Contact"}
        >
          CONTACT US
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
          }
          to={"/BloodDonationRequest"}
        >
          Blood Donation Request
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
          }
          to={"/searchDonation"}
        >
          Find Donation{" "}
        </NavLink>
      </li>
      <div>
        {user && (
          <ul className="lg:flex gap-5 items-center mx-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
                }
                to={"dashboard"}
              >
                DASHBOARD
              </NavLink>
            </li>
            <NavLink 
            className={({ isActive }) =>
            isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
          } to={"/Funding"} >
              <button className="text-center"> Funding </button>
            </NavLink>
          </ul>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center ">
            <img className="h-20 object-cover  rounded" src={logo} alt="" />
            <a className=" hover:cursor-pointer font-semibold normal-case text-2xl">
              Blood <span className="text-red-600 font-bold">Source</span>
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end ml-10 ">
          {user?.email ? (
            <div className="dropdown dropdown-end dropdown-hover text-black ">
              <label
                tabIndex={0}
                className="btn  online btn-ghost btn-circle avatar"
              >
                <div className="w-full border rounded-full">
                  <img className=" h-5/6" src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className=" py-2 ">
                  <NavLink
                    to={
                      isAdmin?.isAdmin
                        ? "/Dashboard/AdminProfile"
                        : isVolunteer?.isVolunteer
                        ? "/Dashboard/VolunteerProfile"
                        : "/Dashboard/UserProfile"
                    }
                    className={({ isPending, isActive }) =>
                      isPending
                        ? "pending "
                        : isActive
                        ? "btn btn-warning "
                        : "btn btn-ghost "
                    }
                  >
                    PROFILE
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isPending, isActive }) =>
                      isPending
                        ? "pending "
                        : isPending
                        ? "pending "
                        : isActive
                        ? "btn btn-outline  "
                        : "btn btn-ghost "
                    }
                    onClick={HandlelogOut}
                  >
                    LOGOUT
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isPending
                  ? "pending "
                  : isActive
                  ? "btn btn-warning "
                  : "btn btn-ghost "
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
