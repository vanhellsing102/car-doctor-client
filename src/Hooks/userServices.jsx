import axios from 'axios';
import React, { useEffect, useState } from 'react';

const userServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        axios.get('http://localhost:5000/services')
        .then(res =>{
            setServices(res.data);
        })
    }, [])
    return services;
};

export default userServices;