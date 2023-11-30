import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { Modal } from "flowbite-react";
import Context from "../../Hooks/useContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const DonationData = useLoaderData();
  const axiosSecure=useAxiosSecure()
  console.log(DonationData);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const {user}=Context()

  const handleDetailsSubmite = (e) => {
    e.preventDefault();

    const form = e.target;
    // console.log(form);
    const donarName = form.DonarName.value
    const donarEmail = form.donarEmail.value
    const donar = {
        donarName,
        donarEmail
    }
    console.log(donar);
    axiosSecure
    .put(`/donar/${DonationData?._id}`, 
        donar
    )
    .then((data) => {
      console.log(data);
      if (data?.data?.modifiedCount > 0) {
        Swal.fire({
          title: "upgrade Request  Successfully!",
          icon: "success",
          timer: 500, // Optional: Auto-close the modal after 2 seconds
          showConfirmButton: false,
        });
        // navigate('/dashboard/donationRequest')
      }
    });
  };
  return (
    <div className="pt-20">
      <Helmet>
        <title> Blood Source || Donation DETAILS</title>
      </Helmet>

      <div className="flex flex-col max-w-5xl  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 ">
        <div>
          <img
            className="  object-cover w-40 rounded-full  mx-auto"
            src={DonationData?.requester_photo}
            alt=""
          />
          <div className="flex  gap-2 items-center justify-center py-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xl text-yellow-600 font-bold"
            >
              {DonationData?.requester_Name}
            </a>
            <span className="text-lg dark:text-gray-400 font-semibold">
              {DonationData?.requester_email}
            </span>
          </div>
          <div className="text-center ">
            <p className="mb-1 text-xl flex gap-1 justify-center text-yellow-600 font-semibold">Address Details</p>
            <span className="flex gap-1 justify-center">
              {" "}
              <p>{DonationData?.recipient_name}</p>
              <p>{DonationData?.hospital_name}</p>
            </span>
            <span className="flex gap-1 justify-center">
              <p>{DonationData?.Address}</p>,<p>{DonationData?.Upazila}</p>,
              <p>{DonationData?.District}</p>
            </span>
          </div>
          <h2 className="mb-1 text-xl flex gap-1 justify-center py-3 text-yellow-600 font-semibold">
            Donation Time :
            <span className="flex gap-1 justify-center">
              <p>{DonationData?.donation_date}</p>,
              <p>{DonationData?.donation_time}</p>,
            </span>
          </h2>
          <p className="text-sm dark:text-yellow-500 text-center">
            {DonationData?.Request_Message}
          </p>
        </div>
    
        <div>
     

{/* Put this part before </body> tag */}
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<form onSubmit={handleDetailsSubmite}>
<div className="flex justify-center">
<button className="btn btn-warning btn-outline flex " onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
</div>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <label className="label">
    <span className="label-text">Donar Name</span>
  </label>
  <input
      readOnly
      type="text"
      defaultValue={user?.Donar_name}
      name="DonarName"
      placeholder="Donar_Name"
      className="input input-bordered w-full"
    />
    <label className="label">
    <span className="label-text">Donar email</span>
  </label>
  <label className="input-group">
    <input
      readOnly
      type="email"
      defaultValue={user?.email}
      name="donarEmail"
      placeholder="Product Img"
      className="input input-bordered w-full"
    />
  </label>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button  className="btn">Okk</button>
      </form>
    </div>
  </div>
</dialog>
</form>
  
        </div>
      
      </div>

   
    </div>
  );
};

export default DonationDetails;

