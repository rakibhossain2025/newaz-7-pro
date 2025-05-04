import React from 'react';
import { Link } from 'react-router';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
const Doctor = ({ data }) => {
  const { name, image, available_days, experience, isBest, degree, registration_no } = data
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const isAvailable = available_days.includes(today)
  return (
    <section className=''>
      <div className=" bg-base-100 shadow-sm p-4 rounded-2xl ">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[200px] w-full"
        />
        <div className="">
          <h2 className="card-title mt-2 font-bold capitalize">{name} <span className='text-[10px] bg-green-700 rounded-2xl px-2'>{isBest ? 'pro' : ''}</span></h2>
          <h2 className="text-gray-700 font-semibold h-12 border-b border-dashed pb-1 border-gray-400 ">{degree}</h2>
          <div className='flex gap-4 mt-3'>
            {isAvailable ? <p className='px-4 bg-green-100 rounded-2xl text-[14px] border border-green-600 font-bold text-green-600'>Available</p> : <p className='px-4 bg-yellow-200 rounded-2xl text-[14px] border border-yellow-600 text-yellow-600 font-bold'>Unavailable</p>}
            <p className='px-4 bg-blue-200 rounded-2xl text-[14px] border border-blue-600 text-blue-600 font-bold'>{experience}+</p>
          </div>
          <p className='my-1 flex items-center gap-1 '>
            <span className='text-xl pt-1'>
              <PiTrademarkRegisteredLight size={20} color='blue' />
            </span>{registration_no}</p>
          <Link to={`doctor/${registration_no}`}>
            <button onClick={() => { window.scrollTo(0, 0) }} className=" w-full button cursor-pointer">View Details </button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default Doctor;