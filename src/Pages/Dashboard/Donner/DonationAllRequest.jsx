import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import "../../../Components/Pagination.css";
import Context from "../../../Hooks/useContext";
import SectionTitle from "../../../Components/Header/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ReactiveButton from "reactive-button";
import { Link } from "react-router-dom";
import DonationTable from "../../../Components/User/DonationTable";
const DonationAllRequest = () => {
  const [bloodRequest, setbloodRequest] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const [showAllDonations, setShowAllDonations] = useState(false);

  const { user } = Context();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // const pages = []
  // for(let i = 0; i < numberOfPages; i++){
  //     pages.push(i)
  // }
  console.log(currentPage,itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axiosPublic.get("/requestCount").then((res) => {
      console.log(res.data.count);
      setCount(res.data.count);
    });
  }, []);

  useEffect(() => {
    axiosPublic
      .get(`/request?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setbloodRequest(res?.data?.count);
      });
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const { data: AllDonationRequest = [] } = useQuery({
    queryKey: ["AllDonationRequest?", user?.email],
    queryFn: async () => {
      console.log(user);
      const res = await axiosSecure.get(`/donation_request/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  // if (!AllDonationRequest || AllDonationRequest.length === 0) {
  //   // If no donation requests, hide the section
  //   return null;
  // }
  // console.log(AllDonationRequest);

  // const sortedDonationRequests = AllDonationRequest.sort(
  //   (a, b) => new Date(b.donation_date) - new Date(a.donation_date)
  // );

  // const displayedDonations = showAllDonations
  //   ? sortedDonationRequests
  //   : sortedDonationRequests.slice(0, 3);

  return (
    <div>
      <div>
        <div className="flex">
          <label className="sr-only">Choose a state</label>
          <select
            id="states"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a state</option>

            <option value="GE">Georgia</option>
            <option value="MI">Michigan</option>
          </select>
        </div>
      </div>
      <h2 className="text3-xl">
        Total Donation Request: {AllDonationRequest?.length}
      </h2>
      {AllDonationRequest && AllDonationRequest.length > 0 ? (
   <div>
      <DonationTable></DonationTable>
      <div className="my-20">
 <nav
  className="grid grid-cols-2 justify-end items-center text-center"
  aria-label="Page navigation example "
>
  <ul className="flex items-center justify-center -space-x-px h-10 text-base">
    <li onClick={handlePrevPage}>
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-3 h-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" d="M5 1 1 5l4 4" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {pages.map((page) => (
          <button
            className={
              currentPage === page ? "selected" : undefined
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
      </a>
    </li>

    <li onClick={handleNextPage}>
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-3 h-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" d="m1 9 4-4-4-4" />
        </svg>
      </a>
    </li>
  </ul>
  <select
    className="w-20"
    value={itemsPerPage}
    onChange={handleItemsPerPage}
    name=""
    id=""
  >
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="40">40</option>
  </select>
</nav>
</div>
   </div>

     
      ) : (
        <div className="w-fit border-2 shadow-xl  rounded">
          <SectionTitle
            heading="Please You Have Try Blood Donation And Check It "
            subHeading="You Have No Donation Request ?"
          ></SectionTitle>
        </div>
      )}
    </div>
  );
};

export default DonationAllRequest;




// <div className="my-20">
// <nav
//   className="grid grid-cols-2 justify-end items-center text-center"
//   aria-label="Page navigation example "
// >
//   <ul className="flex items-center justify-center -space-x-px h-10 text-base">
//     <li onClick={handlePrevPage}>
//       <a
//         href="#"
//         className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//       >
//         <span className="sr-only">Previous</span>
//         <svg
//           className="w-3 h-3 rtl:rotate-180"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 6 10"
//         >
//           <path stroke="currentColor" d="M5 1 1 5l4 4" />
//         </svg>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//       >
//         {pages.map((page) => (
//           <button
//             className={
//               currentPage === page ? "selected" : undefined
//             }
//             onClick={() => setCurrentPage(page)}
//             key={page}
//           >
//             {page}
//           </button>
//         ))}
//       </a>
//     </li>

//     <li onClick={handleNextPage}>
//       <a
//         href="#"
//         className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//       >
//         <span className="sr-only">Next</span>
//         <svg
//           className="w-3 h-3 rtl:rotate-180"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 6 10"
//         >
//           <path stroke="currentColor" d="m1 9 4-4-4-4" />
//         </svg>
//       </a>
//     </li>
//   </ul>
//   <select
//     className="w-20"
//     value={itemsPerPage}
//     onChange={handleItemsPerPage}
//     name=""
//     id=""
//   >
//     <option value="5">5</option>
//     <option value="10">10</option>
//     <option value="20">20</option>
//     <option value="40">40</option>
//   </select>
// </nav>
// </div>