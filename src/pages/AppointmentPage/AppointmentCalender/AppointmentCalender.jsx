import React from "react";
import chair from "../../../assets/images/chair.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentCalender = ({ selectedDate, setSelectedDate }) => {
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
            <div className="w-full text-black rounded-lg lg:ml-64 lg:w-1/2 max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <DayPicker
                className="bg-white p-10"
                mode="single"
                selected={selectedDate}
                onSelect={(data) => {
                  if (data) {
                    setSelectedDate(data);
                  }
                }}
              />
            </div>
            <div className="w-full mb-14 max-w-xl lg:1/2 xl:px-8 xl:w-5/12">
              <img className="lg:max-w-md" src={chair} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalender;
