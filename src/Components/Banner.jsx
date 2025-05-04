import React from 'react';

export const Banner = () => {
  return (
    <div className=' lg:min-h-auto lg:mx-4 border-3 bg-gradient-to-t from-[#fff] to-[#efefef] border-white rounded-3xl
    '>
      <div className='px-4'>
        <h1 className='text-center font-bold text-3xl lg:pt-12 pt-4 px-4 mb-4 lg:w-4/5 mx-auto'>Dependable Care, Backed by Trusted Professionals.</h1>
        <p className='text-sm text-gray-700 text-center lg:mb-0 mb-2 '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        <div className='flex justify-center lg:mt-3 items-center mt-0 p-3 '>
          <input className='lg:w-full focus:border-none outline-none focus:outline-none input' type="text" placeholder='type your doctor' />
          <button className='btn hover:bg-blue-600 hover:text-white bg-blue-300'>Search  Now</button>
        </div>
        <div className='flex gap-3 w-full lg:mt-8 mt-2 p-3 '>
          <img className='lg:w-1/2 lg:p-0 rounded-2xl mx-auto' src="https://i.ibb.co.com/bj5BjfKK/d1.jpg" alt="" />
          <img className='hidden lg:block rounded-2xl lg:w-1/2' src="https://i.ibb.co.com/v2qvY7d/banner-img-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

