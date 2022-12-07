import React, { useState } from 'react';
import AppointmentCalender from './AppointmentCalender/AppointmentCalender';
import ServicesList from './ServicesList/ServicesList';

const AppointmentPage = () => {
    const fns = () => {
        console.log('i will be passed');
    }
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [treatment, setTreatment] = useState(null);
    return (
        <>
            <AppointmentCalender selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <ServicesList fns={fns} selectedDate={selectedDate} setTreatment={setTreatment} treatment={treatment} />
            
        </>
    );
};

export default AppointmentPage;