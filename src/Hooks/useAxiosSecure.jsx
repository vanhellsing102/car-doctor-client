import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSerure = axios.create({
    baseURL: 'https://car-doctor-server-flame-pi.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect( () =>{
        axios.interceptors.response.use(response =>{
            return response;
        }, error =>{
            // console.log('interceptors', error.response);
            if(error.response.status === 401 || error.response.status === 403){
                // console.log('logout use');
                logOut()
                    .then(() =>{
                        navigate('/login');
                    })
                    .catch(error => {
                        // console.log(error);
                    })
            }
        })
    }, [])
    return axiosSerure;
};

export default useAxiosSecure;