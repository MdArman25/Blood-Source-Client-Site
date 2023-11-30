import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAdmin from "../../../Hooks/useAdmin";
import useVolunteer from "../../../Hooks/useModerator";


const AllDonationRequest = () => {
    // const { user } = Context();
  const [isAdmin,isAdminLoading]=useAdmin()
  const [isVolunteer,isVolunteerLoading]=useVolunteer()

  const axiosSecure = useAxiosSecure();
    const { data: AllAAdminDonationRequest = [] } = useQuery({
      queryKey: ["AllAdminDonationRequest?"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/Admin_donation_request`);
        console.log(res.data);
        return res.data;
      },
    });
    return (
      <div>
        <h2 className="text3-xl">
          Total Donation Request: {AllAAdminDonationRequest?.length}
        </h2>
        
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
                {AllAAdminDonationRequest?.map((Donation, index) => (
                  <tr className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={Donation?._id}>
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
        
      </div>
    );
  };
export default AllDonationRequest;