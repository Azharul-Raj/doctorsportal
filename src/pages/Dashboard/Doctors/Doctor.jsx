import React from "react";
import ConfirmModal from "./ConfirmModal";

const Doctor = ({ doctor, idx, refetch }) => {
  const {  speciality, name, picture, _id } = doctor;
  return (
    <>
      <tr className="text-black">
        <th>0 {idx + 1}</th>
        <td>
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={picture} alt="" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{speciality}</td>
        <td>
          <label
            htmlFor="my-modal"
            className="btn h-10 text-white border-0 bg-[#E11244] hover:bg-[#E11244]"
          >
            Delete
          </label>
          {/* <button className='btn '>Delete</button> */}
        </td>
      </tr>
      {doctor && <ConfirmModal doctor={doctor} id={_id} refetch={refetch} />}
    </>
  );
};

export default Doctor;
