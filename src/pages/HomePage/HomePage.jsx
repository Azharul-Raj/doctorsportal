import React from 'react';
import Appointment from './Appoinment/Appointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const HomePage = () => {
    return (
        <>
            <Banner />
            <Info />
            <Services />
            <Appointment />
            <Reviews />
            <Contact/>
        </>
    );
};

export default HomePage;