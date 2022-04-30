import React from 'react';
import About from '../About/About';
import Reasons from './Reasons/Reasons';
import Services from './Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Services></Services>
            <Reasons></Reasons>
            <About></About>


        </div>
    );
};

export default Home;