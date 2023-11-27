import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { createContext, useEffect, useState } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Context from "../../Hooks/useContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const { signInUser, signInWithGoogle } = Context();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  // console.log(signInUser);

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlevalidetCapture = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const HandleFrom = (e) => {
    e.preventDefault();
    const emailvalue = e.target.email.value;
    const passwordvalue = e.target.password.value;
    signInUser(emailvalue, passwordvalue)
      .then((result) => {
        console.log(result);
        navigate(location.state ? location.state : "/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log(emailvalue, passwordvalue);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
        BloodGroup: null,
        District: null,
        Upazila: null,
        status: "active",
        role:'Donar'
      };
      console.log(result);
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
          toast.success("successFully User Login");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={HandleFrom}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="">
                <LoadCanvasTemplate />
              </label>

              {/* <label className="label">
                  
                  
                 
                </label> */}
              <input
                onBlur={handlevalidetCapture}
                type="text"
                placeholder="type the captcha above"
                className="input input-bordered"
                name="captcha"
                // required
              />
            </div>
          </div>

          <div>
            <button
              // disabled={disabled}
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              LOGIN NOW
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with Social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with GOOGLE</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
