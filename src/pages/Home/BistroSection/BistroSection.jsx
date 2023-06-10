import React from 'react';
import './BistroSection.css'

const BistroSection = () => {
    return (
        <div>
              <div className="hero min-h-screen bistro mt-4 mb-7">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className=" w-[1050px] h-[300px]  flex flex-col justify-center  bg-white  
                     text-black ">
                       <h3 className='text-4xl font-bold py-5'>Bistro Boss</h3>
                       <p className='text-center space-y-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero 
                         accusamus laborum<br/> deserunt ratione dolor officiis praesentium! Deserunt 
                        magni aperiam dolor eius<br/> dolore at, nihil iusto ducimus incidunt 
                         quibusdamnemo.
                       </p>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default BistroSection;