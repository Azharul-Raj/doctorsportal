import React from 'react';
import chair from '../../../assets/images/chair.png'
import Button from '../../../components/Button';

const Banner = () => {
    return (
        <div className="relative">
        <img
          src={chair}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-white bg-opacity-[.9]">
          <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-52">
            <div className="flex flex-col-reverse items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl sm:leading-none">
                Your New Smile Starts
                Here{' '}
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-600 md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </p>
                <Button></Button>
              </div>
              <div className="w-full mb-14 max-w-xl xl:px-8 xl:w-5/12">
                <img src={chair} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;