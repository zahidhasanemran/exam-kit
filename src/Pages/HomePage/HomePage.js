import React, { Fragment } from 'react';
import HeroSection from './HeroSection/HeroSection';
import ServiceSection from './ServiceSection/ServiceSection';
import TeamSlider from './TeamSlider/TeamSlider';


const HomePage = () => {
    return (
        <Fragment>
            <HeroSection></HeroSection>
            <ServiceSection></ServiceSection>
            <TeamSlider></TeamSlider>
        </Fragment>
    );
};

export default HomePage;