import { createBrowserRouter } from "react-router-dom";
import MainLyout from "../Layout/MainLyout";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SIgnUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Layout/PrivateRoute";
import AdminHome from "../Pages/Dashboard/Profile";
import Users from "../Pages/Dashboard/Admin/Users";
import DonationRequestForm from "../Pages/Dashboard/Donner/AddDonationRequest";
import AdminRoute from "./AdminRoute";
import UserHome from "../Pages/Dashboard/Donner/UserHome";
import DonationAllRequest from "../Pages/Dashboard/Donner/DonationAllRequest";
import AllDonationRequest from "../Pages/Dashboard/Admin/AllDonationRequest";
import VolunteerRoute from "./VolunteerRoute";
import VolunteerProfile from "../Pages/Dashboard/Volunteer/VolunteerProfile";
import DonationUpadate from "../Components/DonationUpadate";
import BloodDonationRequest from "../Pages/Public/BloodDonationRequest";
import DonationDetails from "../Pages/Public/DonationDetails";
import Contact from "../Pages/Contact";
import SearchPage from "../Pages/Public/SearchPage";
import Funding from "../Pages/Dashboard/Donner/Funding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout></MainLyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/searchDonation",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/BloodDonationRequest",
        element: <BloodDonationRequest></BloodDonationRequest>,
      },
      {
        path: "/Funding",
        element: <Funding></Funding>,
      },
      {
        path: "/donationDetails/:id",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-server-plum.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  {
    path: "Dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/Dashboard/AdminProfile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Users></Users>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/VolunteerProfile",
        element: (
          <PrivateRoute>
            <VolunteerRoute>
              <VolunteerProfile></VolunteerProfile>
            </VolunteerRoute>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/Dashboard/Profile",
      //   element: (
      //     <PrivateRoute>
      //       <AdminRoute>
      //         {" "}
      //         <AdminHome></AdminHome>
      //       </AdminRoute>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path:'/Dashboard',
      //   element:<VolunteerRoute><Dashboard></Dashboard> </VolunteerRoute>
      // },
      {
        path: "/Dashboard/UserProfile",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/CreateDonation",
        element: (
          <PrivateRoute>
            <DonationRequestForm></DonationRequestForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/donationRequest",
        element: (
          <PrivateRoute>
            <DonationAllRequest></DonationAllRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/All_donation_request",
        element: (
          <PrivateRoute>
            <AllDonationRequest></AllDonationRequest>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-server-plum.vercel.app/requestCount"),
      },
      {
        path: "/Dashboard/MyDonationUpdate/:id",
        element: (
          <PrivateRoute>
            <DonationUpadate></DonationUpadate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-server-plum.vercel.app/donationDetails/${params.id}`
          ),
      },
    ],
  },
]);
