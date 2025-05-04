import React from 'react';
import { CustomBtn, ReUseNav } from '../uitilits/reUse/reUseNav';

const Header = () => {
  return (
    <header className="navbar  mx-auto max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
            <ReUseNav />
          </ul>
        </div>
        <div className='flex gap-1 flex-row-reverse items-center cursor-pointer'>
          <h1 className='text-2xl font-black'>Phudu</h1>
          <img src='https://i.ibb.co.com/r2xt7wDj/logo.png' className='w-9' alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 font-bold ">
          <ReUseNav />
        </ul>
      </div>
      <div className="navbar-end">
        <CustomBtn name={'Emergency'} />
      </div>
    </header>
  );
};

export default Header;