import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-5 md:px-10 lg:px-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;