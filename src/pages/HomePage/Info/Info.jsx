import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Card from './Card';

const Info = () => {
    const cardsData = [
        {
            id: 1,
            icon:clock,
            name:'Opening Hours',
            desc: 'Opens 9am to 5pm everyday',
            cls:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            icon:location,
            name:'Visit Our Location',
            desc: 'Mahigong, Rangpur ,Bangladesh',
            cls:'bg-[#3A4256]'
        },
        {
            id: 3,
            icon:phone,
            name:'Opening Hours',
            desc: 'Contact Us Now',
            cls:'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:mt-[-30px] lg:place-items-center'>
            {
                cardsData.map(card=><Card key={card.id} card={card}/>)
            }
        </div>
    );
};

export default Info;