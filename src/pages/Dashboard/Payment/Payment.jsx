import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripePublishKey);
const Payment = () => {
  const booking = useLoaderData();
  return (
    <>
      <div className="mb-5 text-center">
        <h4 className="text-xl text-black">
          Your Appointment Coast {booking.price}$
        </h4>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-96">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
