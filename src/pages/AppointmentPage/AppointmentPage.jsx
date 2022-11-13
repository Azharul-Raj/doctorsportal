import React, { useState } from 'react';
import AppointmentCalender from './AppointmentCalender/AppointmentCalender';
import Modal from './Modal/Modal';
import ServicesList from './ServicesList/ServicesList';

const AppointmentPage = () => {
    const [selected, setSelected] = useState(new Date());
    const [treatment, setTreatment] = useState([]);
    return (
        <>
            <AppointmentCalender selected={selected} setSelected={setSelected} />
            <ServicesList selected={selected} setTreatment={setTreatment} />
            <Modal treatment={ treatment} selected={selected} />
        </>
    );
};

export default AppointmentPage;