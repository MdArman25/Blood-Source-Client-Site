// import { FaTrashAlt, FaUsers } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useUsers from "../Hooks/useUsers";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
// import BackToTop from "../Hooks/useTop";

// const Users = () => {
//   const axiosSecure = useAxiosSecure();
//   const [users,refetch] =useUsers()
// //   const { data: users, refetch } = useQuery({
// //     queryKey: ["users"],
// //     queryFn: async () => {
// //       const res = await axiosSecure.get("/Users");
// //     //   console.log(res.data,data)
// //       return res.data;
// //     },
// //   });
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/users/${id}`).then((res) => {
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire({
//               title: "Deleted!",
//               text: "User has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };
//   const HandleMakeAdmin = (user) => {
//     axiosSecure.patch(`users/admin/${user?._id}`).then((res) => {
//       console.log(res.data);
//       if (res.data.modifiedCount > 0) {
//         refetch();
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: `${user?.name} is an Admin Now `,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="flex justify-evenly my-5">
//         <h2 className="text-3xl">All Users</h2>
//         <h2 className="text-3xl">Total Users {users?.length}</h2>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table w-full ">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>email</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users?.map((user, index) => (
//               // console.log(user),
//               <tr key={user._id} className="bg-base-200">
//                 <th>{index + 1}</th>
//                 <td>{user?.name}</td>
//                 <td>{user?.email}</td>
//                 <td>
//                   {" "}
//                   {user?.role ? (
//                     "admin"
//                   ) : (
//                     <button
//                       onClick={() => HandleMakeAdmin(user)}
//                       className="btn btn-ghost btn-lg"
//                     >
//                       <FaUsers className="text-red-600"></FaUsers>
//                     </button>
//                   )}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user?._id)}
//                     className="btn btn-ghost btn-lg"
//                   >
//                     <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <BackToTop></BackToTop>
//     </div>
//   );
// };

// export default Users;

import Swal from "sweetalert2";

import useUsers from "../Hooks/useUsers";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import BackToTop from "../Hooks/useTop";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUsers();
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
        // User confirmed, perform the action
        axiosSecure
          .put(`/user-update?email=${email}`, {
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
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
                      {" "}
                      <div className="">
                        <button
                          onClick={() =>
                            handlePromoteUser("student", user?.email)
                          }
                          className="btn btn-primary btn-sm mr-2"
                          disabled={user?.role === "student"}
                        >
                          student
                        </button>
                        <button
                          className="btn btn-warning mr-2 btn-sm"
                          onClick={() =>
                            handlePromoteUser("instructor", user?.email)
                          }
                          disabled={user?.role === "instructor"}
                        >
                          Instructor
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
