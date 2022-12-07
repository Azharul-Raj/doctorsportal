import React from 'react';

const SmallSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-6 h-6 border-4 text-center border-green-500 border-dashed rounded-full animate-spin'></div>
        </div>
    );
};

export default SmallSpinner;