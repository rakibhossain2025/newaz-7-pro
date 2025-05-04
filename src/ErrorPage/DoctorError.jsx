import React from 'react';
import { NavLink, useParams } from 'react-router';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { CustomBtn } from '../uitilits/reUse/reUseNav';

const DoctorError = () => {
  const { regNo } = useParams()
  return (
    <>
    <div className='min-h-[calc(100vh-238px)] mx-auto max-w-7xl flex-col'>
      <div className='flex flex-col justify-center items-center bg-white rounded-3xl py-12'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-2'>NO Doctor Found!!</h1>
        <p className='flex gap-1 items-center mb-4 '><PiTrademarkRegisteredLight size={25} /> {regNo}</p>
        <NavLink to={'/'} className='max-w-full'> <CustomBtn name={'Go Back'} /> </NavLink>
      </div>
    </div>
    </>

  );
};

export default DoctorError;