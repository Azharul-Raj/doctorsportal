import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import Modal from '../Modal/Modal';
import ServiceCard from './ServiceCard';
import MediumSpinner from '../../../components/MediumSpinner';


const ServicesList = ({ selectedDate, treatment, setTreatment}) => {

    const date = format(selectedDate, 'PP')
    const {data:services=[],refetch } = useQuery({
        queryKey: ['services',date],
        queryFn: () => axios.get(`/services?date=${date}`)
            .then(res => res.data)
    })
    return (
        <>
            <h3 className='text-center text-2xl mb-24 text-primary'>Available Appointments on {format(selectedDate, 'PP')}</h3>
            
            {services.length?<div className="grid grid-cols-1 lg:grid-cols-3 text-center place-items-center gap-4">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            :<MediumSpinner/>
        }
            {treatment &&
                <Modal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                refetch={refetch}
                />}
        </>
    );
};

export default ServicesList;