import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, price,recipe} = item;
    //console.log(item.image);
    return (
        <div>
           <div className='flex space-x-4'>
                <img src={image} alt="" style={{borderRadius: '0 200px 200px 200px'}}  className='w-[100px]'/>
                <div>
                   <h3 className='upercase'>{name}</h3>
                   <p>{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
           </div>
        </div>
    );
};

export default MenuItem;