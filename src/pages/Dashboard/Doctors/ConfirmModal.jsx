import React from "react";
import toast from "react-hot-toast";

const ConfirmModal = ({ id, doctor, refetch }) => {
  const handleDelete = (id) => {
    fetch(`/doctor/${id}`, {
      method:"DELETE"
    })
      .then(res => res.json())
      .then(data => {
        toast.success('DOCTOR DELETED SUCCESSFULLY');
        refetch()
      })
    .catch(err=>toast.error(err.message))
  };
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-black">
          <h3 className="font-bold text-lg ">
            Do You Want to delete Doctor {doctor.name}?{" "}
          </h3>
          <p className="py-4">
            Remember if you delete it. Then it's can't be undone!!
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              onClick={() => handleDelete(id)}
              className="btn btn-sm h-4 bg-red-500 hover:bg-red-500 text-white border-0"
            >
              Delete
            </label>
            <label
              htmlFor="my-modal"
              className="btn btn-sm bg-transparent text-black border-1 hover:bg-gray-700 hover:text-white"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
