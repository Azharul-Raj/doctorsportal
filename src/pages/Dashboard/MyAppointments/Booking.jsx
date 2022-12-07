import React from 'react';
import { Link } from 'react-router-dom';

const Booking = ({ booking, idx }) => {
    const { patientName, sickness, slot, appointmentDate,_id,paid } = booking; 
    return (
        <tr className='text-black'>
            <th>{ idx+1}</th>
        <td> {patientName}</td>
        <td>{appointmentDate}</td>
        <td>{slot}</td>
        <td>{sickness}</td>
            <td>
                {paid ?
                <p className=" text-green-500">Paid</p>
                    :
                    <Link to={`/dashboard/payment/${_id}`}>
                <button className='btn bg-gradient-to-r from-primary to-secondary border-0 text-white'>Pay</button>
                    </Link>
                }
        </td>
      </tr>
    );
};

export default Booking;