import axios from 'axios';
import React, { useEffect, useState } from 'react';

const userServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        axios.get('https://car-doctor-server-flame-pi.vercel.app/services')
        .then(res =>{
            setServices(res.data);
        })
    }, [])
    return services;
};

export default userServices;