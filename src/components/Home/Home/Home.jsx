import React from 'react';
import Slider from '../Slider';
import About from '../About';
import Services from '../Services/Services';
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;