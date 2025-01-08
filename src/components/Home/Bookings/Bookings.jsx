import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Booking from './Booking';

const Bookings = () => {

    const { user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect( () =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    const handleDelete = id =>{
        const process = confirm("Are you sure you want to delete");
        if(process){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remainingBookings = bookings.filter(booking => booking._id !== id);
                    setBookings(remainingBookings);
                }
            })
        } 
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('confirm');
                const remainingBookings = bookings.filter(booking => booking._id !== id);
                const updatedBooking = bookings.find(booking => booking._id === id);
                updatedBooking.status = "confirm";
                const newBookings = [updatedBooking, ...remainingBookings];
                setBookings(newBookings);
            }
        })  
    }

    return (
        <div>
            <h1 className='text-5xl text-center font-bold mb-7'>My Bookings: <span className='text-[#FF3811]'>{bookings.length}</span></h1>
            <div className='flex flex-col gap-5 mb-7'>
                {
                    bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></Booking>)
                }
            </div>
        </div>
    );
};

export default Bookings;