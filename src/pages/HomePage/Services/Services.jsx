import React from 'react';
import Service from './Service';
import first from '../../../assets/images/fluoride.png';
import second from '../../../assets/images/cavity.png';
import third from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import Button from '../../../components/Button';

const Services = () => {
    const servicesInfo = [
        {
            id: 1,
            img:first,
            title: "Fluoride Treatment",
            desc:"In this package we offer general teeth treatment for the affected patient"
        },
        {
            id: 2,
            img:second,
            title: "Cavity Filling",
            desc:"In this package we offer general teeth cavity filling for the affected patient"
        },
        {
            id: 3,
            img:third,
            title: "Teeth Whitening",
            desc:"In this package we offer general teeth whitening for the affected patient"
        },
    ]
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-24">
                <h4 className="text-xl text-primary font-bold">Our Services</h4>
                <p className="text-4xl mb-16 text-black">Services We Provide</p>
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center'>
            {
                servicesInfo.map(service => <Service key={service.id} service={ service} />)
            }
            </div>
            <div className="grid grid-cols-12 my-9 lg:my-40">
                <div className="col-span-12 lg:col-span-6">
                    <img className='w-[322px] h-[406px] mx-auto lg:w-[458px] lg:h-[578px] rounded-lg lg:ml-52' src={treatment} alt="" />
                </div>
                <div className="col-span-12 mx-7 lg:col-span-6 lg:w-[497px] items-center lg:ml-24 my-auto">
                    <h3 className='text-5xl text-black font-bold'>Exceptional Dental Care, on Your Terms</h3>
                    <p className='text-black py-11'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button></Button>
                </div>
            </div>
            </>
    );
};

export default Services;