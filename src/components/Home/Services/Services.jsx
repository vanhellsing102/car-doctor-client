// import React, { useEffect, useState } from 'react';
import userServices from '../../../Hooks/userServices';
import ServiceCard from './ServiceCard';

const Services = () => {

    // user Custome hook ***
    const services = userServices();
    
    // const [services, setServices] = useState([]);
    // useEffect( () =>{
    //     fetch('https://car-doctor-server-flame-pi.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])

    return (
        <div>
            <div className='text-center space-y-3'>
                <p className='text-[20px] font-semibold text-[#FF3811]'>Service</p>
                <h2 className='font-bold text-6xl'>Our Service Area</h2>
                <p className='font-thin text-[16px]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;