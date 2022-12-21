import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png';

const Footer = () => {
  return (
      <>
        <footer className="relative">
            <img
          src={footerImg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="flex w-full flex-col lg:justify-between lg:flex-row p-10 text-slate-700 relative">
  <div className='lg:py-7'>
    <span className="footer-title">Services</span> 
    <Link className="link block link-hover">Emergency Checkup</Link> 
    <Link className="link block link-hover">Monthly Checkup</Link> 
    <Link className="link block link-hover">Weekly Checkup</Link> 
    <Link className="link block link-hover">Deep Checkup</Link>
  </div> 
  <div className='py-24 lg:py-7'>
    <span className="footer-title">ORAL HEALTH</span> 
    <Link className="link block link-hover">Fluoride Treatment</Link> 
    <Link className="link block link-hover">Cavity Filling</Link> 
    <Link className="link block link-hover">Teeth Whitening</Link>
  </div> 
  <div className='lg:py-7'>
    <span className="footer-title">OUR ADDRESS</span> 
    <Link className="link block link-hover">New York - 101010 Hudson</Link>
          </div>
          </div>
      <div className="flex justify-center items-center text-slate-900 py-5">Copyright 2022 All Rights Reserved</div>
</footer>
      </>
    );
};

export default Footer;