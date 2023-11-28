import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import Context from "../../Hooks/useContext";
import { Link } from "react-router-dom";
import ReactiveButton from "reactive-button";
import Swal from "sweetalert2";

const DonationTable = () => {
  const [showAllDonations, setShowAllDonations] = useState(false);

  const { user } = Context();
  const axiosSecure = useAxiosSecure();
  //   const axiosPublic = useAxiosPublic();
  // const [bloodRequest, setbloodRequest] = useState([]);
  const { data: AllDonationRequest = [] } = useQuery({
    queryKey: ["AllDonationRequest?", user?.email],
    queryFn: async () => {
      console.log(user);
      const res = await axiosSecure.get(`/donation_request/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  if (!AllDonationRequest || AllDonationRequest.length === 0) {
    // If no donation requests, hide the section
    return null;
  }
  console.log(AllDonationRequest);

  const sortedDonationRequests = AllDonationRequest.sort(
    (a, b) => new Date(b.donation_date) - new Date(a.donation_date)
  );

  const displayedDonations = showAllDonations
    ? sortedDonationRequests
    : sortedDonationRequests.slice(0, 3);

//   const handlePromoteClass = (
//     status,
//     id,
//     instructorEmail,
//     name,
//     price,
//     subCategory
//   ) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to undo this action.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, update it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // User confirmed, perform the action
//         axiosSecure
//           .post(`/class-update/:${id}`, {
//             status: status,
//             instructorEmail: instructorEmail,
//             name: name,
//             price: price,
//             subCategory: subCategory,
//           })
//           .then((data) => {
//             if (data?.data?.modifiedCount > 0) {
//               Swal.fire({
//                 title: "upgrade class Successfully!",
//                 icon: "success",
//                 timer: 500, // Optional: Auto-close the modal after 2 seconds
//                 showConfirmButton: false,
//               });
//               refetch();
//             }
//           });
//       }
//     });
//   };

  return (
    <div className="w-full">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>recipient_name</th>
            <th>hospital_name</th>

            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedDonations?.map((Donation, index) => (
            <tr
              className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={Donation?._id}
            >
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={Donation?.requester_photo} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{Donation?.requester_Name}</div>
                    <div className="text-sm opacity-50">
                      {Donation?.requester_email}
                    </div>
                  </div>
                </div>
              </td>
              <td>{Donation?.recipient_name}</td>
              <td>{Donation?.hospital_name}</td>
              {/* <td>{Donation?.date.slice(0, 10)}</td> */}
              <td>{Donation?.donation_date}</td>
              <td>{Donation?.donation_status}</td>
              <td>
                <>
                  <div className="flex gap-2">
                    <Link to={`/Dashboard/MyDonationUpdate/${Donation?._id}`} className="btn btn-primary btn-sm mr-2">
                      Update
                    </Link>

                    <Link className="btn btn-error text-stone-50 btn-sm">
                      Delete
                    </Link>
                  </div>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-7 ">
        {!showAllDonations && (
          <ReactiveButton outline onClick={() => setShowAllDonations(true)}>
            Show All
          </ReactiveButton>
        )}
      </div>
    </div>
  );
};

export default DonationTable;
