import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
// import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Context from "../../Hooks/useContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";

const api_key = "2096348e81bc39817643de553a77e7db";
const SignUp = () => {
  const [districts,setDistrics]=useState([])
  const [upazilas,setUpazila]=useState([])
  const navigate = useNavigate();
  const { createUser, updeateProfile } = Context();
  const AxiosPublic = useAxiosPublic();
  const Handleregister = async (e) => {
    e.preventDefault();
    const emailvalue = e.target.email.value;
    const namevalue = e.target.name.value;
    const passwordvalue = e.target.password.value;
    const image = e.target.image.files[0];
    const BloodGroup = e.target.bloodGroup.value;
    const District = e.target.district.value;
    const Upazila = e.target.upazila.value;
    
    console.log(BloodGroup);

    const formData = new FormData();
    formData.append("image", image);
    // console.log(image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${api_key}`,
      formData
    );
    console.log(data.data.display_url);

    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(
        passwordvalue
      )
    ) {
      // console.log("Valid password:", passwordvalue);
    } else {
      toast.error("Password must contain at least one letter and one number, and be at least 8 characters long.");
      
    }

    createUser(emailvalue, passwordvalue)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      // create user entry in the database
      const userInfo = {
        name: namevalue,
        email: emailvalue,
        image:data?.data?.display_url,
        BloodGroup:BloodGroup,
        District:District,
Upazila:Upazila

      };
      console.log(userInfo);
      AxiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("urser added to the database");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
      updeateProfile(namevalue, data?.data?.display_url)
      
    }
    ).catch((error) =>
    console.log(error)
  )
    ;

   
  };

  useEffect( () => {
    fetch("/district.json")
      .then((res) => res.json())
      .then((data) => {
        setDistrics(data);
        // setloding(false)
      });
    }, []);
  useEffect( () => {
    fetch("/Upazila.json")
      .then((res) => res.json())
      .then((data) => {
        setUpazila(data);

      });
    }, []);


  return (
    <>
      <Helmet>
        <title> | Sign Up</title>
      </Helmet>
      <div className="flex ">
        <div>
          <p>arman</p>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col  p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-400">Welcome to Blood Source</p>
            </div>
            <form
              onSubmit={Handleregister}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div className="flex gap-7">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      BLOOD GROUP
                    </label>
                    <select
                      name="bloodGroup"
                      defaultValue="default"
                      className="select select-bordered w-full"
                    >
                      <option disabled value="default">
                        Select Your Blood Group
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-7">
                  <div className="flex-1 border-2 w-28">
                    <label htmlFor="email" className="block mb-2 text-sm">
                      BLOOD GROUP
                    </label>
                    <input
                      required
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block mb-2 text-sm">
                      District Name
                    </label>
                   
      <select  name="district"
                      defaultValue="default"
                      className="select select-bordered w-full" required>
      
        <option value="default" disabled>Select your District</option>
        {districts?.map((district, index) => (
          <option key={index} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>
                  </div>
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2 text-sm">
                      District Name
                    </label>
                   
                    <select  name="upazila"
                      defaultValue="default"
                      className="select select-bordered w-full" required>
      
        <option value="default" disabled>Select your Upazila</option>
      
        {upazilas?.map((upazila, index) => (
          <option key={index} value={upazila.name}>
            {upazila.name}
          </option>
        ))}
      </select>
                  </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  />
                  <span className="relative text-xl  -top-8 left-60 md:left-72"></span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-rose-500 w-full rounded-md py-3 text-white"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Signup with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
