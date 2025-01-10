import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const service = useLoaderData();
    const { title, price, img } = service;

    const handleBookService = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const date = form.get("date");
        const phone = form.get("phone");
        const email = form.get("email");
        const custormer = {
            customer_name: name,
            date,
            phone,
            email: email,
            title,
            price,
            img
        }
        
        fetch("https://car-doctor-server-flame-pi.vercel.app/bookings", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(custormer)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Order booked successfully");
            }
        }) 
    }
    
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Check Out: <span className='text-[#FF3811]'>{title}</span></h1>
            <form onSubmit={handleBookService} className='bg-gray-500 p-10 my-5 rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    <input type="text" name='name' placeholder='Your Name' className='input input-bordered w-full' />
                    <input type="date" name='date' className='input input-bordered w-full' />
                    <input type="number" name='phone' placeholder='phone' className='input input-bordered w-full' />
                    <input type="email" name='email' placeholder='email' className='input input-bordered w-full' />
                </div>
                <input type="submit" value={"Order Confirm"} className='bg-[#FF3811] w-full mt-7 py-2 rounded-lg btn font-bold' />
            </form>
        </div>
    );
};

export default CheckOut;