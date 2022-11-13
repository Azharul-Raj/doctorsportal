import React from "react";
import { format } from 'date-fns';

const Modal = ({ treatment, selected }) => {
  const { slots } = treatment;
  const date = format(selected, 'PP');
  const handleAppointment = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    console.log(slot);
  }
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-black">
          <div className="flex justify-between">
          <h3 className="font-bold  text-lg">
            {treatment?.name}
            </h3>
            <label htmlFor="my-modal" className="btn btn-sm bg-black text-white btn-circle absolute right-2 top-2">✕</label>
          </div>          
          <form onSubmit={handleAppointment} className="my-4">
          <input style={{backgroundColor:'#C8C8C8'}} type="text" value={date} disabled placeholder="Type here" className="input border-0 mb-4 input-sm w-full" />
            {/* select part start */}
            <select name="slot" className="select mb-4 border-gray-400  select-success w-full">
              {
                slots?.map(slot => <option key={slot}>{ slot}</option>)
                }
            </select>
            {/* select part end */}
            <input name="name" type="text" placeholder="Full Name" className="input mb-4 border-gray-400 input-bordered input-md w-full " />
            <input name="phone" type="number" placeholder="Phone Number" className="input mb-4 border-gray-400 input-bordered input-md w-full " />
            <input name="email" type="text" placeholder="Email" className="input mb-4 border-gray-400 input-bordered input-md w-full " required />
              <button className="btn btn-active w-full">Submit</button>
            </form>
          <div className="modal-action w-full">
            {/* <button htmlFor="my-modal" className="btn w-full">Submit</button> */}
            {/* <label  className="btn btn-active w-full">
              Submit
            </label> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
