import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Users = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("/users").then((res) => res.json()),
  });
//   user update function
    const handleUpdate = (id) => {
        fetch(`/user/admin/${id}`, {
            method:"PUT"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('admin created successfully')
                refetch()
        })
    }
    // user delete function
    const handleDelete = (id) => {
        console.log(id);
        fetch(`/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('deleted successfully')
                refetch()
            })
            .catch(err => toast.error(err.message));
    }
    return (
      <>
            {users?.length ?
                <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Approve Role</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr className="text-black" key={idx}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user?.email}</td>
              <td>
                {user?.role !=='admin' && <button onClick={()=>handleUpdate(user._id)} className="btn btn-xs bg-green-500 text-black border-0 hover:bg-green-500">
                  Make Admin
                </button>}
              </td>
              <td>
                {user?.role !== 'admin'?
                  <button onClick={() => handleDelete(user._id)} className="btn btn-xs bg-red-500 text-white border-0 hover:bg-red-500">
                  Delete
                  </button>
                  : 'Admin'   
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
                </div> :
            <div className="">  No user found</div>
            }
            </>
  );
};

export default Users;
