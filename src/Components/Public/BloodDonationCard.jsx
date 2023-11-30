/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BloodDonationCard = ({ donation }) => {
  return (
    <div className="">
      <div
        data-aos="fade-up"
        className="max-w-sm bg-white border shadow-xl h-60 border-gray-200 rounded-xl  dark:bg-gray-800 dark:border-gray-700 text-center"
      >
        <img
          className="rounded-full mx-auto"
          src={donation?.requester_photo}
          alt=""
        />

        <div className="p-5">
          <div className="flex justify-center">
            <p className="flex">
              ,<p className="text-xl font-semibold">{donation?.Upazila}</p>,
              <p className="text-xl font-bold">{donation?.District}</p>
            </p>
          </div>

          <p className="flex gap-2 justify-center">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {donation?.donation_date}
            </h5>

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {donation?.donation_time}
            </h5>
          </p>

          <div className=" flex justify-center my-5  ">
            <Link
              to={`/donationDetails/${donation._id}`}
              // onClick={() = handleDelete(donation._id)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonationCard;
