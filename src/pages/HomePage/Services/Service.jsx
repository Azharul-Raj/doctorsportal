import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, desc, img } = service;
  return (
    <div className="p-10 max-w-sm w-[378px] lg:w-[440px] text-center bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-center items-center">
        <img className="my-9" src={img} alt="" />
      </div>
      <Link to='/'>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-900">{desc}</p>
    </div>
  );
};

export default Service;
