import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServicesList = ({selected,setTreatment}) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./appointmentLists.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <>
            <h3 className='text-center text-2xl mb-24 text-primary'>Available Appointments on {format(selected, 'PP')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 text-center place-items-center gap-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} setService={ setTreatment} />)
                }
        </div>
        </>
    );
};

export default ServicesList;