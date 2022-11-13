import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor-small.png';
import Button from '../../../components/Button';

const Appointment = () => {
    return (
        <div className="relative">
      <img
        src={appointment}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-0">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="hidden lg:block">
                            <img className='absolute h-[630px] top-[-150px]' src={doctor} alt="" />
                            
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="">
                                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                                <p className='text-3xl font-semibold text-white'>Make an appointment Today</p>
                                <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Appointment;