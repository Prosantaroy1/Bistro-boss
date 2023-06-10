import React from 'react';
import SectionTitle from '../../../component/SectionTitle';
import img3 from '../../../assets/shop/banner2.jpg'
import './FeatureSection.css'

const FeatureSection = () => {
    return (
        <div className='mt-5 mb-4 bg-fixed feature-class flex flex-col justify-center  items-center
         text-white'>
            <SectionTitle
               subheading={'Check it out'}
               heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='flex gap-4 justify-center z-50 mt-5'>
                <img src={img3} alt="" className='w-[400px] h-[230px]'/>
                <div>
                    <h5 className='text-white font-bold'>March 20, 2023</h5>
                    <h3 className=' text-4xl font-bold'>WHERE CAN I GET SOME?</h3>
                    <p className='font-semibold space-x-4'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Error<br/> voluptate 
                      facere, deserunt dolores maiores quod nobis<br/> quas quasi. Eaque repellat 
                       recusandae adlaudantium tempore <br/>consequatur consequuntur omnis ullam maxime 
                        tenetur.
                    </p>
                    <button className="btn  text-white border-0 border-b-4 font-bold 
                    text-xl mt-3">
                        Read Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;