import React from 'react';
import { ReUseNav } from '../uitilits/reUse/reUseNav';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className='flex flex-col gap-3 items-center '>
      <div className='flex gap-1 flex-row-reverse items-center cursor-pointer'>
        <h1 className='text-2xl font-black'>Phudu</h1>
        <img src='https://i.ibb.co.com/r2xt7wDj/logo.png' className='w-9' alt="" />
      </div>
      <div className='flex list-none gap-3 border-b pb-4 w-full border-gray-500 justify-center'>
        <ReUseNav />
      </div>
      <div className='flex gap-3 '>
        <a target='_blank' href="http://facebook.com"><FaFacebook size={25} color='blue' /> </a>
        <a target='_blank' href="http://twitter.com"><FaTwitter size={25} color='black' /> </a>
        <a target='_blank' href="http://youtube.com"><BsYoutube size={25} color='red' /> </a>
        <a target='_blank' href="http://linkedin.com"><FaLinkedin size={25} color='sky' /> </a>
      </div>
    </footer>
  );
};

export default Footer;