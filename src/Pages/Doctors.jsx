import React, { Suspense, useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';
import Counter from '../Components/Counter';
import LOading from '../Components/LOading';
import { CardContext } from '../uitilits/Provider/Contex';
const Doctors = () => {
  const { cart } = useContext(CardContext)
  if (cart) {
    window.scrollTo(0, 800)
  }
  const allData = useLoaderData()
  const [half, setHalf] = useState([])
  const [All, setAll] = useState(false)
  useEffect(() => {
    if (All) {
      setHalf(allData)
    } else {
      setHalf(allData.slice(0, 6))
    }
  }, [allData, All])
  return (
    <>
      <Suspense fallback={<LOading />}>
        <section>
          <div>
            <h1 className='text-3xl text-center font-bold '> Our Best Doctors</h1>
            <p className='text-[16px] text-center mb-7 text-gray-700'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
              half.map(data => <Doctor key={data.id} data={data} />)
            }
          </div >
          <button className='btn flex mx-auto mt-6 w-full rounded-3xl border-blue-500 hover:bg-blue-500 hover:text-white bg-blue-200' onClick={() => { setAll(reverse => !reverse); if (All) window.scrollTo({ top: 500, behavior: 'smooth' }) }}>{All ? "Show Less" : 'Show All'}</button>
        </section >
      </Suspense>
      <Counter />
    </>
  );
};

export default Doctors;