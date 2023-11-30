import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useUsers from "../../../Hooks/useUsers";

const AllUsers = () => {
  const [users, refetch, isLoading] = useUsers();
  const axiosSecure = useAxiosSecure();
  console.log(users);
  const handlePromoteUser = (role, email) => {
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
        axiosSecure
          .put(`/use-rupdate?email=${email}`, {
            role: role,
          })
          .then((data) => {
            if (data?.data?.modifiedCount > 0) {
              Swal.fire({
                title: "upgrade user Successfully!",
                icon: "success",
                timer: 500, // Optional: Auto-close the modal after 2 seconds
                showConfirmButton: false,
              });
              refetch();
            }
          });
      }
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      {/* <Loading></Loading> */}
    </div>
  ) : (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl font-semibold">Total Users: {users?.length}</h3>
      </div>
      <div className="flex justify-center py-10">
        <select className="select select-accent w-full  max-w-xs">
          <option disabled selected>
            Search For Find Users
          </option>
          <option>Active</option>
          <option>Block</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <label tabIndex={0} className="btn  btn-outline m-1">
                      <span className="mr-1">Admin</span>
                    </label>
                  ) : (
                    <>
                      <div className="grid gap-4 md:flex">
                        <button
                          onClick={() =>
                            handlePromoteUser("Donar", user?.email)
                          }
                          className="btn btn-primary btn-sm mr-2"
                          disabled={user?.role === "Donar"}
                        >
                          Donar
                        </button>
                        <button
                          className="btn btn-warning mr-2 btn-sm"
                          onClick={() =>
                            handlePromoteUser("Volunteer", user?.email)
                          }
                          disabled={user?.role === "Volunteer"}
                        >
                          Volunteer
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() =>
                            handlePromoteUser("admin", user?.email)
                          }
                          disabled={user?.role === "admin"}
                        >
                          admin
                        </button>
                      </div>
                    </>
                  )}
                </td>
                {/* <td className="">
                <button
                          className="btn btn-secondary btn-sm"
                          // onClick={() =>
                          //   // handlePromoteUser("admin", user?.email)
                          // }
                          disabled={user?.role === "admin"}
                        >
                          admin
                        </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
