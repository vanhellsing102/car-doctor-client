import React from "react";
import logo from '../../assets/logo/logo.svg';
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-5 md:p-10 lg:p-20">
      <aside>
        <img src={logo} alt="" />
        <p>Edwin Diaz is a software and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
        <div className="flex gap-4 mt-2">
            <FaGoogle className="bg-gray-400 p-1 rounded-full text-2xl hover:cursor-pointer"></FaGoogle>
            <FaTwitter className="bg-gray-400 p-1 rounded-full text-2xl hover:cursor-pointer"></FaTwitter>
            <FaInstagram className="bg-gray-400 p-1 rounded-full text-2xl hover:cursor-pointer"></FaInstagram>
            <FaLinkedinIn className="bg-gray-400 p-1 rounded-full text-2xl hover:cursor-pointer"></FaLinkedinIn>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why car doctor</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessibility</a>
      </nav>
    </footer>
  );
};

export default Footer;
