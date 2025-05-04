import React, { Suspense, useEffect, useState } from 'react';
import LOading from '../Components/LOading';

const ShowBooking = ({ data, handleBooking }) => {

  const { degree, name, id, visit_price } = data
  useEffect(() => {
    document.title = 'Jhakana Doctors'
  }, [])

  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 500);

  }, [])
  if (show) return <LOading />

  return (
    <>
      <Suspense fallback={<LOading />}>
        <div className='py-6 px-3 bg-white rounded-2xl mx-auto max-w-7xl'>
          <div className='lg:flex space-y-4 lg:space-y-4 justify-between items-center border-b border-gray-500 border-dashed pb-2'>
            <div>
              <h1 className='text-lg font-bold'> {name}</h1>
              <h1 className='text-sm text-gray-700'> {degree} </h1>
            </div>
            <div className='text-sm font-bold'>
              Appointment Fee : {visit_price} Taka  + Vat
            </div>
          </div>
          <button onClick={() => { handleBooking(id) }} className='w-full btn mt-2 border-red-500 hover:bg-red-500 hover:text-white rounded-3xl '>Cancel Appointment</button>
        </div>
      </Suspense>
    </>
  );
};

export default ShowBooking;