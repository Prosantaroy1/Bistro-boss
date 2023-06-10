import React from "react";
import { Helmet } from "react-helmet-async";
import CoverBanner from "../shared/CoverBanner/CoverBanner";
import img from '../../assets/menu/banner3.jpg'
import DessertImg from '../../assets/menu/dessert-bg.jpeg'
import PizzaImg from '../../assets/menu/pizza-bg.jpg'
import SaladImg from '../../assets/menu/salad-bg.jpg'
import SoupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../Castom Hook/useMenu";
import SectionTitle from "../../component/SectionTitle";
import MainCategory from "../Home/MainCategory/MainCategory";



const OurMenu = () => {
 //
 const [menu] = useMenu();
//
 const desserts = menu.filter(item => item.category === 'dessert')
 const soup = menu.filter(item => item.category === 'soup')
 const pizza = menu.filter(item => item.category === 'pizza')
 const salad = menu.filter(item => item.category === 'salad')
 const offered = menu.filter(item => item.category === 'offered')
 

  return (
    <div>
        <Helmet>
            <title>Bistro Restudent--Our Menu</title>
        </Helmet>
        <CoverBanner img={img} title={'OUR MENU'}/>
        <SectionTitle  
             subheading={'Dont miss'}
              heading={'TODAYS OFFER'}
        ></SectionTitle>
        {/*offer menu */}
        <MainCategory
          items={offered}
        ></MainCategory>
        {/*desserts */}
        <MainCategory
          items={desserts}
          image={DessertImg}
          title={"dessert"}
        ></MainCategory>
        {/*soup */}
        <MainCategory
          items={soup}
          image={SoupImg}
          title={"soup"}
        ></MainCategory>
        {/*desserts */}
        <MainCategory
          items={salad}
          image={SaladImg}
          title={"salad"}
        ></MainCategory>
        {/*desserts */}
        <MainCategory
          items={pizza}
          image={PizzaImg}
          title={"pizza"}
        ></MainCategory>
    </div>
  );
};

export default OurMenu;
