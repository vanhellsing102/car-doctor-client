import React from 'react';
import { MdAttachMoney } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    const { img, title, price, _id } = service;
    
    return (
        <div className='border-2 border-black p-3 rounded-xl'>
            <img className='rounded-xl h-[208px] w-full' src={img} alt="" />
            <h2 className='text-3xl font-bold'>{title}</h2>
            <div className='flex justify-between'>
                <p className='text-lg flex items-center text-[#FF3811]'>Price: <MdAttachMoney></MdAttachMoney>{price}</p>
                <Link to={`/checkout/${_id}`}>
                    <button className='text-xl text-[#FF3811]'><FaLongArrowAltRight></FaLongArrowAltRight></button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;