import React from "react";

const ServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="py-11 px-20 lg:px-28 w-[347px] lg:w-[425px] bg-white rounded-lg shadow-md ">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
        {name}
      </h5>

      <p className="mb-3 font-normal text-black">
        {slots[0] ? slots[0] : "Try another day"}
      </p>
      <p className="text-black mb-4">{slots?.length?`${slots.length} SPACE AVAILABLE`:'UNAVAILABLE SPACE'}</p>
      {/* <Link> */}
          {slots.length?<label htmlFor="my-modal"
        onClick={() => setTreatment(service)}
        
        className={'btn text-white border-0 bg-gradient-to-r from-primary to-secondary'}>BOOK APPOINTMENT</label> :
        <label htmlFor="my-modal"        
        className={'disabled'}>BOOK APPOINTMENT</label>
              }
      {/* </Link> */}
    </div>
  );
};

export default ServiceCard;
