import React, { useContext } from "react";
import logo from '../../assets/logo/logo.svg'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

  const {user, logOut } = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
  }
    
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/service'}>Service</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        {
          user ? <>
            <li><NavLink to={"/bookings"}>My Bookings</NavLink></li>
            <li><button onClick={handleLogout} className="bg-[#FF3811] ml-3"><Link>Log out</Link></button></li>
          </> 
          : 
          <li><Link to={'/login'}>Login</Link></li>
        }
    </>

  return (
    <div className="navbar bg-base-100 px-5 md:px-10 lg:px-20 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
                links
            }
          </ul>
        </div>
        <Link to={'/'}>
            <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Header;


