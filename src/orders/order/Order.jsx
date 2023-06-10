import React, { useState } from "react";
import CoverBanner from "../../pages/shared/CoverBanner/CoverBanner";
import orderimg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Castom Hook/useMenu";
import OrderTab from "../orderTab/orderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    //
    const categories = ['salad', 'dessert', 'drinks', 'soup', 'pizza'];
    const { category } = useParams();
    console.log(category)
    const initialIndex =categories.indexOf(category);
    console.log(initialIndex)
   const [tabIndex, setTabIndex] = useState(initialIndex);
  ///menu all data
  const [menu] = useMenu();
  //category filter
   const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')

  return (
    <div>
      <CoverBanner img={orderimg} title={"Order Menu Bar"}></CoverBanner>
      <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>DESSERTS</Tab>  
          <Tab>Driniks</Tab>
          <Tab>SOUPS</Tab>
          <Tab>PIZZA</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
           <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
           <OrderTab items={pizza}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
