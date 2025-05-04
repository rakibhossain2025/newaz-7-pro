import React from 'react';
import { NavLink, useLocation, } from 'react-router';
import { CustomBtn } from '../uitilits/reUse/reUseNav';

const Error = () => {
  const url = useLocation()
  return (
    <div className="relative min-h-screen bg-gray-400 flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/qMGsm8MF/not-found.jpg')] bg-no-repeat bg-cover brightness-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className='text-4xl text-red-500 font-black mb-2'>Your expected page not found</h1>
        <p className='text-lg font-bold text-red-500'>
          could not found <span className='font-black'>
            {url.pathname.replace(/[^a-z0-9\s]/g, '')}
          </span>
        </p>
        <NavLink to={'/'}>
          <CustomBtn name={'Go Back'} widh={'w-48'} />
        </NavLink>
      </div>
    </div>

  );
};

export default Error;