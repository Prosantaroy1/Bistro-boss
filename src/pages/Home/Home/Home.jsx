import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../../Category/Category';
import BistroSection from '../BistroSection/BistroSection';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import RecepiCart from '../RecepiCart/RecepiCart';
import FeatureSection from '../FeatureSection/FeatureSection';
import ClientReview from '../../ClientReview/ClientReview';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroSection/>
            <PopularMenu/>
            <Contact/>
            <RecepiCart/>
            <FeatureSection/>
            <ClientReview/>
        </div>
    );
};

export default Home;