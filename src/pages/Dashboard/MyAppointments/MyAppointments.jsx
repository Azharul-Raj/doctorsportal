/* eslint-disable react-hooks/rules-of-hooks */
//  eslint-disable react-hooks/rules-of-hooks 
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider";
import Booking from "./Booking";

const MyAppointments = () => {
  const { user } = useContext(authContext);
  // if (!user?.email) {
  //     return <h1>Loading..</h1>
  //   }
    const { data: bookings = [], isLoading } = useQuery({
    
    queryKey: ["bookings", user?.email],    
    // queryFn: getRequest('bookings','email',user?.email)
    queryFn: async () => {
      const res = await axios.get(
        `bookings?email=${user?.email}`
        //   headers: {
        //     authorization:`berar ${localStorage.getItem('token')}`
        //   }
        // }, 
      );
      return res.data;
    },
  });
  console.log(bookings);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="h-10 w-10 border-8 rounded-full border-dashed border-cyan-500 animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <div className="text-3xl text-black">My Appointments</div>

      <div className="overflow-x-auto">
        <table className="table w-full bg-red-500">
          <thead>
            <tr className="bg-red-500">
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>TREATMENT</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <Booking key={idx} booking={booking} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAppointments;
