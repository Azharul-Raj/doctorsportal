import React from 'react';

const Review = ({ review }) => {
    const { desc, name, img,location } = review;
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg gap-4 md:gap-6 px-8 py-6">
        <div className="max-w-md text-black lg:text-sm">{desc}</div>

        <div className="flex flex-row sm:flex-row items-center gap-2 md:gap-3">
          <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-primary rounded-full overflow-hidden">
            <img src={img} alt="Clint" className="w-full h-full object-cover object-center" />
          </div>

          <div>
            <div className="text-black text-sm md:text-base font-bold text-center sm:text-left">{name}</div>
            <p className="text-black text-sm md:text-sm text-center sm:text-left">{location}</p>
          </div>
        </div>
      </div>
    );
};

export default Review;