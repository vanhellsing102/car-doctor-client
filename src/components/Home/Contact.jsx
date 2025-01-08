import React from 'react';
import icon1 from '../../assets/icons/check.svg';
import icon2 from '../../assets/icons/deliveryt.svg';
import icon3 from '../../assets/icons/group.svg';

const Contact = () => {
    return (
        <div className='text-white bg-black p-7 rounded-xl mb-7 flex flex-col md:flex-row justify-between'>
            <div className='flex items-center gap-3'>
                <img src={icon1} alt="" />
                <div>
                    <p className='text-sm font-semibold'>We are open monday-friday</p>
                    <h2 className='text-3xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={icon2} alt="" />
                <div>
                    <p className='text-sm font-semibold'>Have a question?</p>
                    <h2 className='text-3xl font-bold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={icon3} alt="" />
                <div>
                    <p className='text-sm font-semibold'>Need a repair? our address</p>
                    <h2 className='text-3xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;