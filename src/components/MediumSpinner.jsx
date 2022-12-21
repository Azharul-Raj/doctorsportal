import React from 'react';

const MediumSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-12 h-12 border-8 text-center border-cyan-400 border-dashed rounded-full animate-spin'></div>
            <div className='w-12 h-12 border-8 mx-10 text-center border-cyan-500 border-dashed rounded-full animate-spin'></div>
            <div className='w-12 h-12 border-8 text-center border-cyan-600 border-dashed rounded-full animate-spin'></div>
        </div>
    );
};

export default MediumSpinner;