import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="grid w-full lg:grid-cols-3 lg:place-items-stretch lg:grid-flow-col p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link block link-hover">Branding</a> 
    <a className="link block link-hover">Design</a> 
    <a className="link block link-hover">Marketing</a> 
    <a className="link block link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link block link-hover">About us</a> 
    <a className="link block link-hover">Contact</a> 
    <a className="link block link-hover">Jobs</a> 
    <a className="link block link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link block link-hover">Terms of use</a> 
    <a className="link block link-hover">Privacy policy</a> 
    <a className="link block link-hover">Cookie policy</a>
  </div>
</footer>
    //     <footer className='footer p-10 bg-base-200 text-base-content'>
    //         <div className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center">
    //             {/* left first */}
    //             <div className="">
    //             <span className="footer-title">Services</span> 
    // <Link className="link link-hover">Branding</Link> 
    // <Link className="link link-hover">Design</Link> 
    // <Link className="link link-hover">Marketing</Link> 
    // <Link className="link link-hover">Advertisement</Link>
    //             </div>
    //             <div className="">
    //             <span className="footer-title">Services</span> 
    // <Link className="link link-hover">Branding</Link> 
    // <Link className="link link-hover">Design</Link> 
    // <Link className="link link-hover">Marketing</Link> 
    // <Link className="link link-hover">Advertisement</Link>
    //             </div>
    //             <div className="">
    //             <span className="footer-title">Services</span> 
    // <Link className="link link-hover">Branding</Link> 
    // <Link className="link link-hover">Design</Link> 
    // <Link className="link link-hover">Marketing</Link> 
    // <Link className="link link-hover">Advertisement</Link>
    //             </div>
    //         </div>
    //     </footer>
    );
};

export default Footer;