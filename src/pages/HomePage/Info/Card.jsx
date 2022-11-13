import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { name, desc, icon, cls } = card;
  return (
    <div className={`${cls} py-12 w-[378px] mx-auto mb-7 z-10 rounded-lg lg:w-[400px]`}>
      <div className="flex flex-col md:flex-row items-center">
        <img className="ml-6 h-20 w-20 mr-5" src={icon} alt="" />

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-800 text-xl font-bold">
            <Link
              to="/"
              className="hover:text-indigo-500 text-white active:text-indigo-600 transition duration-100"
            >
              {name}
            </Link>
          </h2>

          <p className="text-white">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
