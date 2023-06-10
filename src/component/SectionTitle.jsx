import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12'>
            <p className='text-yellow-600 mb-2 text-2xl'>---{subheading}--</p>
            <h3 className='text-3xl uppercase border-y-4 py-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;