import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import "../../../Components/Pagination.css";
import Context from "../../../Hooks/useContext";
import SectionTitle from "../../../Components/Header/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const DonationAllRequest = () => {
  const [bloodRequest, setbloodRequest] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const { user } = Context();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // const pages = []
  // for(let i = 0; i < numberOfPages; i++){
  //     pages.push(i)
  // }
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axiosPublic.get("/requestCount").then((res) => {
      console.log(res.data.count);
      setCount(res.data.count);
    });
    // fetch('http://localhost:5000/productsCount')
    // .then(res => res.json())
    // .then(data => setCount(data.count))
  }, []);

  useEffect(() => {
    axiosPublic
      .get(`/request?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setbloodRequest(res?.data?.count);
      });
    // fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
  }, [currentPage, itemsPerPage]);

  const { data: AllDonationRequest = [] } = useQuery({
    queryKey: ["AllDonationRequest?", user?.email],
    queryFn: async () => {
      console.log(user);
      const res = await axiosSecure.get(`/donation_request/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

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
  return (
    <div>
      <h2 className="text3-xl">
        Total Donation Request: {AllDonationRequest?.length}
      </h2>
      {AllDonationRequest && AllDonationRequest.length > 0 ? (
        <div className="overflow-x-auto">
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
              </tr>
            </thead>
            <tbody>
              {AllDonationRequest?.map((Donation, index) => (
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
                        <div className="font-bold">
                          {Donation?.requester_Name}
                        </div>
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
                </tr>
              ))}
            </tbody>
          </table>

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
                 {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
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
            <select className="w-20"
          
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
          {/* <div className="pagination shop-container'">
            <p>Current page: {currentPage}</p>
            <button onClick={handlePrevPage}>Prev</button>
            {pages.map((page) => (
              <button
                className={currentPage === page ? "selected" : undefined}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage}>Next</button>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              name=""
              id=""
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div> */}
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
