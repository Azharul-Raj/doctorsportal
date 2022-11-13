import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "John Doe",
            location: "California",
            img:people1
        },
        {
            id: 2,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "John Doe",
            location: "New Yourk",
            img:people2
        },
        {
            id: 3,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "John Doe",
            location: "California",
            img:people3
        }
    ]
    return (
        <div className='mx-6 lg:mx-14 my-28'>
            <div className="flex justify-between items-center">
                <div className="">
                <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                <p className="text-4xl mb-16 text-black">What Our Patient Says</p>
                </div>
                <div className="">
                    <img className='w-24 h-20 mt-[-50px] lg:w-48 lg:h-40' src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                {
                    reviews.map(review=><Review key={review.id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;