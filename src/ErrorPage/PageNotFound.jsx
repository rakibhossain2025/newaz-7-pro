import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import LOading from '../Components/LOading';

const PageNotFound = () => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 500);

  }, [])
  if (show) return <LOading />
  return (
    <div className='min-h-[calc(100vh-240px)] py-12 bg-white rounded-3xl'>

      <div className='py-12 flex-col lg:flex-row flex justify-center items-center bg-white rounded-3xl'>
        <img className='w-128 ' src="https://i.ibb.co.com/qMGsm8MF/not-found.jpg" alt="" />
        <div>
          <h1 className='text-3xl font-bold mb-4 text-red-500'>Page Not Found</h1>
          <NavLink to={'/'} >
            <button className='btn w-full rounded-3xl bg-blue-300 hover:bg-blue-500'>go Back</button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default PageNotFound;