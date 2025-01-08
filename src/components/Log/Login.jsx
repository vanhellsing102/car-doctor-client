import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { FaFacebookSquare, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        
        loginUser(email, password)
        .then(userCredential =>{
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='flex flex-col justify-between lg:flex-row mb-16 items-center'>
            <div className='lg:w-1/2'>
                <img src={login} alt="" />
            </div>
            <div className='p-10 border-2 border-black rounded-xl lg:w-1/2 w-full'>
                <h1 className='text-center text-4xl font-semibold'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col mt-7'>
                        <label>
                            <span>Email</span>
                        </label>
                        <input type="email" name='email' placeholder='Your Email' className='input outline-none border-2 rounded-xl border-black mt-3' required/>
                    </div>
                    <div className='flex flex-col mt-7'>
                        <label>
                            <span>Password</span>
                        </label>
                        <input type="password" name='password' placeholder='Your Password' className='input outline-none border-2 rounded-xl border-black mt-3' required/>
                    </div>
                    <button className='w-full bg-[#FF3811] text-white my-7 py-2 rounded-xl'>Sign In</button>
                    <p className='text-center font-medium text-[22px]'>Or Sign In With</p>
                    <div className='flex justify-center gap-3 my-3'>
                        <button><FaFacebookSquare className='text-4xl border rounded-full  bg-gray-400 p-2'></FaFacebookSquare></button>
                        <button><FaLinkedinIn className='text-4xl border rounded-full  bg-gray-400 p-2'></FaLinkedinIn></button>
                        <button><FaGoogle className='text-4xl border rounded-full  bg-gray-400 p-2'></FaGoogle></button>
                    </div>
                </form>
                <p className='text-md text-center mt-5'>Don't have an accout? <Link to={'/register'} className='text-[#FF3811] font-bold'>Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;