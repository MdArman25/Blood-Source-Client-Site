import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import Context from "../Hooks/useContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SectionTitle from "./Header/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";


const DonationUpdate = () => {
    const navigate=useNavigate()

    const [districts, setDistrics] = useState([]);
    const [upazilas, setUpazila] = useState([]);
    const donation = useLoaderData();
    console.log(donation);
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



const HandleDonationUpdate=(e)=>{
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
    const UpdateDonation = {
      recipient_name,
      address,
      donation_date,
      donation_time,
      hospital_name,
      Request_Message,
      District,
      Upazila,
      donation_status: "pending",
      requester_Name: user?.displayName,
      requester_email: user?.email,
      requester_photo: user?.photoURL,
    };
    Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to undo this action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, perform the action
          axiosSecure
            .put(`/Blood_Request_update/${donation?._id}`, {
                UpdateDonation
            })
            .then((data) => {
              if (data?.data?.modifiedCount > 0) {
                Swal.fire({
                  title: "upgrade Request  Successfully!",
                  icon: "success",
                  timer: 500, // Optional: Auto-close the modal after 2 seconds
                  showConfirmButton: false,
                });
                navigate('/dashboard/donationRequest')
              }
            });
        }
      });
}

    return (
        <div>
        <SectionTitle
          heading="Blood Donation Request Update"
          subHeading="Blood Donation And Save Life?"
        ></SectionTitle>
        <div>
          <form
            onSubmit={HandleDonationUpdate}
            className="container flex flex-col mx-auto space-y-4 shadow-xl shadow-zinc-400"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 lg:col-span-full md:col-span-1">
                <p className="font-extrabold text-xl text-center col-span-full border-2">
               You have Change Information
                </p>
                <p className="text-xs"></p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">recipient Name</label>
                  <input
                    defaultValue={donation?.recipient_name}
                    type="text"
                    name="recipient_name"
                    placeholder="Recipient Name"
                    className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                  />
                </div>
  
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Hospital Name</label>
                  <input
                    defaultValue={donation?.hospital_name
                    }
                    type="text"
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
                    defaultValue="donation?.Upazila
                    "
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
                    defaultValue="donation?.District
                    "
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
                    defaultValue={donation?.address}
                    type="text"
                    placeholder="Full Address"
                    className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full  sm:col-span-3 ">
                  <label className="text-sm ">Donation Date</label>
                  <input
                    name="donation_date"
                    defaultValue={donation?.donation_date
                    }
                    type="date"
                    placeholder=" Donation Date"
                    className="input input-bordered w-full  rounded-md   focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full  sm:col-span-3">
                  <label className="text-sm ">Donation Time</label>
                  <input
                    name="donation_time"
                    defaultValue={donation?.donation_time}
                    type="time"
                    placeholder=""
                    className="input input-bordered w-full rounded-md  font-bold focus:ri focus:ri dark:border-gray-700 text-lg  dark:text-gray-900"
                  />
                </div>
                {/* <br /> */}
  
                <div className="col-span-full">
                  <label className="text-sm">Request Message</label>
                  <input
                    defaultValue={donation?.Request_Message
                    }
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
                  src={donation?.requester_photo
                  }
                  alt=""
                />
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm"> requester Name</label>
                  <input
                    defaultValue={donation?.requester_name
                    }
                    type="text"
                    readOnly
                    // defaultValue={user?.displayName}
                    placeholder="Name"
                    className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm"> requester Email</label>
                  <input
                    defaultValue={donation?.requester_email}
                    type="email"
                    readOnly
                    placeholder="user EMail"
                    className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                  />
                </div>
  
                <div className="col-span-full sm:col-span-3 ">
                  <input
              
                    type="submit"
                    value="Update Request"
                    className="btn btn-warning btn-outline w-full md:ml-32 mt-10"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
    
      </div>
    );
};

export default DonationUpdate;