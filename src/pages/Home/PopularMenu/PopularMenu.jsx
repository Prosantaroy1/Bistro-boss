import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    //
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data =>{
             const popularItem = data.filter(item => item.category === 'popular')
             setMenu(popularItem)
        })
        //console.log(menu)
    },[])
    return (
        <div className='mt-5 mb-6'>
            <SectionTitle
               subheading={'Check it out'}
               heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-4 mt-6 mb-5'>
                {
                    menu.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;