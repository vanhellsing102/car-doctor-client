import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-7 mb-24 mt-7 items-center'>
            <div className='lg:w-1/2 relative'>
                <img className='rounded-xl' src={person} alt="" />
                <img className='w-3/4 absolute top-1/2 left-14 lg:top-36 lg:left-64 border-[8px] border-white rounded-xl' src={parts} alt="" />
            </div>
            <div className='lg:w-1/2 lg:ml-32 mt-16'>
                <h4 className='text-xl font-semibold text-[#FF3811]'>About us</h4>
                <h2 className='text-5xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='mb-3 font-thin'>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                <p className='font-thin'>the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. </p>
                <button className='bg-[#FF3811] mt-3 text-white font-semibold px-3 py-1 rounded-sm'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;