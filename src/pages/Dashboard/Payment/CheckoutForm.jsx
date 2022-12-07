import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import SmallSpinner from '../../../components/SmallSpinner';
import { updatePayment } from '../../../UtilitiFunctions/UpdatePayment';

const CheckoutForm = ({booking}) => {
  // states are here
  const [cardError, setCardError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const { price,patientName,email,_id } = booking;
  useEffect(() => {
    fetch('/create-payment-intent', {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify({price})
    })
      .then(res => res.json())
    .then(data=>setClientSecret(data.clientSecret))
  },[price])
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);
    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    setCardError('');
    if (error) {
      setProcessing(false);
      return setCardError(error.message);
    }
    const {paymentIntent,error:paymentError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: patientName,        
        email
      },
    },
    })
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        patientName,
        bookingID: _id,
        transactionID: paymentIntent.id,
        email,
      }
      updatePayment(payment);
      setProcessing(false);
    }
    if (paymentError) {
      setCardError(paymentError.message);
    }
    setProcessing(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className='btn-sm bg-black text-white w-full rounded-md mt-5' type="submit" disabled={!stripe || !elements}>
        {processing?<SmallSpinner/>:'Pay'}
      </button>
      {
        cardError && <p className='text-xl text-red-600'>{ cardError}</p>
      }
    </form>
  );
};

export default CheckoutForm;