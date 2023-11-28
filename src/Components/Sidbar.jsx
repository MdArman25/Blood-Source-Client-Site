import { NavLink } from 'react-router-dom';
import Context from '../Hooks/useContext';

const Sidebar = () => {
  const {user,logOut}=Context()
  return (
    <div className="flex flex-col  gap-2">
      {/* Navbar menu content here */}
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn btn-warning btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Home
          </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning btn-sm ' : 'btn btn-ghost btn-sm '
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning btn-sm ' : 'btn btn-ghost btn-sm '
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) =>
          isActive ? 'btn btn-warning btn-sm ' : 'btn btn-ghost btn-sm '
        }
      >
        Services
      </NavLink>
      {user?.email && (
            <ul className=" grid grid-cols-1 gap-3">
              <NavLink
                to="/add_service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                <li className="">Add Service</li>
              </NavLink>
              <NavLink
                to="/manage_service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn btn-warning btn-sm" : "btn btn-ghost  btn-sm"
                }
              >
                <li className="">My Service</li>
              </NavLink>
              <NavLink
                to="/my_schedule"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                <li className="">MY Schedule</li>
              </NavLink>
            </ul>
          )}
      {user?.email ? (
            <div className="dropdown dropdown-end mx-auto ">
              
              <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} alt={user.display} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box  w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <NavLink  className={({ isActive }) =>
          isActive ? 'btn btn-warning btn-sm ' : 'btn btn-ghost '
        } onClick={logOut}>Logout</NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login"
            className={({ isActive, isPending }) =>
            isPending ? "pending " :  isActive ? 'btn btn-warning btn-sm' : 'btn btn-ghost '
          }>Login</NavLink>
          )}
    </div>
  );
};

export default Sidebar;