// const [recipientName, setRecipientName] = useState('');
// const [recipientDistrict, setRecipientDistrict] = useState('');
// const [recipientUpazila, setRecipientUpazila] = useState('');
// const [hospitalName, setHospitalName] = useState('');
// const [fullAddress, setFullAddress] = useState('');
// const [donationDate, setDonationDate] = useState('');
// const [donationTime, setDonationTime] = useState('');
// const [requestMessage, setRequestMessage] = useState('');

// const loggedInUserName = 'John Doe';
// const loggedInUserEmail = 'john.doe@example.com';
// const formData = {
//     requesterName: loggedInUserName,
//     requesterEmail: loggedInUserEmail,
//     recipientName,
//     recipientDistrict,
//     recipientUpazila,
//     hospitalName,
//     fullAddress,
//     donationDate,
//     donationTime,
//     requestMessage,
//     donationStatus: 'pending',
//   };

import { useForm } from "react-hook-form";
import ReactiveButton from "reactive-button";

import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/Header/SectionTitle";
import BackToTop from "../../../Hooks/useTop";
import { useEffect, useState } from "react";

import Context from "../../../Hooks/useContext";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddItems = () => {
  const [districts, setDistrics] = useState([]);
  const [upazilas, setUpazila] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { user } = Context();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    fetch("/district.json")
      .then((res) => res.json())
      .then((data) => {
        setDistrics(data);
      });
  }, []);
  useEffect(() => {
    fetch("/Upazila.json")
      .then((res) => res.json())
      .then((data) => {
        setUpazila(data);
      });
  }, []);

  const HandleDonation = async (e) => {
    e.preventDefault();
    const form = e.target;

    const recipient_name = form.recipient_name.value;
    const hospital_name = form.hospital_name.value;
    const donation_date = form.donation_date.value;
    const donation_time = form.donation_time.value;
    const Request_Message = form.Request_Message.value;

    const address = form.address.value;
    const District = form.district.value;
    const Upazila = form.upazila.value;

    console.log(
      recipient_name,
      donation_date,
      donation_time,
      District,
      Upazila,
     
    );
    console.log();
    const userInfo = {
      recipient_name,
      donation_date,
      hospital_name,
      Request_Message,
      District,
      Upazila,
      donation_status: "pending",
      requester_Name: user?.displayName,
      requester_email: user?.email,
      requester_photo: user?.photoURL,
    };
    axiosPublic.post("/donation-request", userInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have Request  successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
    });
  };
  // console.log(HandleDonation.e);
  return (
    <div>
      <SectionTitle
        heading="request blood donation"
        subHeading="Blood Donation And Save Life?"
      ></SectionTitle>
      <div>
        <form
          onSubmit={HandleDonation}
          className="container flex flex-col mx-auto space-y-4 shadow-xl shadow-zinc-400"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 lg:col-span-full md:col-span-1">
              <p className="font-extrabold text-xl text-center col-span-full border-2">
                Please Give Some Information
              </p>
              <p className="text-xs"></p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">recipient Name</label>
                <input
                  type="text"
                  name="recipient_name"
                  placeholder="Recipient Name"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Hospital Name</label>
                <input
                  // type="url"
                  name="hospital_name"
                  placeholder="Hospital Name"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Upazila Name
                </label>

                <select
                  name="upazila"
                  defaultValue="default"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="default" disabled>
                    Select your Upazila
                  </option>

                  {upazilas?.map((upazila, index) => (
                    <option key={index} value={upazila.name}>
                      {upazila.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm">
                  District Name
                </label>

                <select
                  name="district"
                  defaultValue="default"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="default" disabled>
                    Select your District
                  </option>
                  {districts?.map((district, index) => (
                    <option key={index} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-full ">
                <label className="text-sm ">Address</label>
                <input
                  name="address"
                  type="text"
                  placeholder="Full Address"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full  sm:col-span-3 ">
                <label className="text-sm ">Donation Date</label>
                <input
                  name="donation_date"
                  type="date"
                  placeholder=" Donation Date"
                  className="input input-bordered w-full  rounded-md   focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full  sm:col-span-3">
                <label className="text-sm ">Donation Time</label>
                <input
                  name="donation_time"
                  type="time"
                  placeholder=""
                  className="input input-bordered w-full rounded-md  font-bold focus:ri focus:ri dark:border-gray-700 text-lg  dark:text-gray-900"
                />
              </div>
              {/* <br /> */}

              <div className="col-span-full">
                <label className="text-sm">Request Message</label>
                <input
                  type="text"
                  name="Request_Message"
                  placeholder=" Message"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1 ">
              <p className="text-xl text-center font-bold m-5">Profile</p>
              <img
                className="w-4/5 m-auto rounded-md object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm"> requester Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm"> requester Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="user EMail"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <input
                  type="submit"
                  value="Add Request"
                  className="btn btn-warning btn-outline w-full md:ml-32 mt-10"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <BackToTop></BackToTop>
    </div>
  );
};

export default AddItems;
