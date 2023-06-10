import React from 'react';
import SectionTitle from '../../../component/SectionTitle';
import img3 from '../../../assets/home/chef-service.jpg'


const RecepiCart = () => {
    return (
        <div>
            <SectionTitle
                 subheading={'should Try'}
                 heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='flex gap-6 mt-6'>
              <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                 <img src={img3} alt="Shoes" className='h-[200px]'/>
                 <div className="card-body">
                   <h2 className="text-center font-bold text-2xl">Caeser Salad</h2>
                   <p className='text-center'>Lettuce, Eggs, Parmesan Cheese,<br/> Chicken Breast Fillets.</p>
                   <div className="card-actions justify-center">
                     <button className="btn btn-outline btn-secondary">add to cart</button>
                   </div>
                 </div>
              </div>
              <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                 <img src={img3} alt="Shoes" className='h-[200px]'/>
                 <div className="card-body">
                   <h2 className="text-center font-bold text-2xl">Caeser Salad</h2>
                   <p className='text-center'>Lettuce, Eggs, Parmesan Cheese,<br/> Chicken Breast Fillets.</p>
                   <div className="card-actions justify-center">
                     <button className="btn  btn-secondary">add to cart</button>
                   </div>
                 </div>
              </div>
              <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                 <img src={img3} alt="Shoes" className='h-[200px]'/>
                 <div className="card-body">
                   <h2 className="text-center font-bold text-2xl">Caeser Salad</h2>
                   <p className='text-center'>Lettuce, Eggs, Parmesan Cheese,<br/> Chicken Breast Fillets.</p>
                   <div className="card-actions justify-center">
                     <button className="btn btn-outline btn-secondary">add to cart</button>
                   </div>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default RecepiCart;