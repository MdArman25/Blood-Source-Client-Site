import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Context from "../../../Hooks/useContext";
import SectionTitle from "../../../Components/Header/SectionTitle";
const DonationAllRequest = () => {
  const { user } = Context();
  const axiosSecure = useAxiosSecure();
  const { data: AllDonationRequest = [] } = useQuery({
    queryKey: ["AllDonationRequest?", user?.email],
    queryFn: async () => {
      console.log(user);
      const res = await axiosSecure.get(`/donation_request/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
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
        </div>
      ) : (
        <div className="w-fit border-2 shadow-xl  rounded">
          <SectionTitle
            heading="Please You Have Try Blood Donation And Check It "
            subHeading="You Have No Donation Request ?"
          >
            {" "}
          </SectionTitle>
        </div>
      )}
    </div>
  );
};

export default DonationAllRequest;
