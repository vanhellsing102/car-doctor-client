import React from 'react';

const Booking = ({booking, handleDelete, handleBookingConfirm}) => {

    const { title, customer_name, date, price, img, _id, status } = booking;

    return (
        <div className='flex justify-between items-center flex-col md:flex-row lg:flex-row'>
            <img src={img} alt="" className='w-24 h-24 rounded-xl' />
            <div>
                <h2 className='text-2xl font-semibold'>{customer_name}</h2>
                <p className='font-thin'>{title}</p>
            </div>
            <p>${price}</p>
            <p>{date}</p>
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            { 
                status === "confirm" ? 
                <span className='text-md font-bold text-green-600'>Confirmed</span>
                :
                <button onClick={() => handleBookingConfirm(_id)} className='bg-[#FF3811] px-3 rounded-md py-1 text-white'>Pending</button>
            }
        </div>
    );
};

export default Booking;