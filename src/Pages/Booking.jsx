import React, { useContext, useEffect, useState } from 'react';
import { getDataFromLS } from '../uitilits/Getdata';
import ShowBooking from './ShowBooking';
import { ToastContainer, toast } from 'react-toastify';
import BerChar from '../Components/BerChar';
import { Zoom } from 'react-toastify/unstyled';
import { NavLink } from 'react-router';
import { CardContext } from '../uitilits/Provider/Contex';


const Booking = () => {
  const [book, setBook] = useState([])
  useEffect(() => {

    const localData = getDataFromLS()
    fetch('./api.json')
      .then(res => res.json())
      .then(data => {
        const matchData = data.filter(bookData => localData.includes(bookData.id))
        setBook(matchData)
      }
      )
  }, [])
  const handleBooking = (id) => {
    const uiUpdate = book.filter(i => i.id !== id)

    setBook(uiUpdate)

    const getFromLSD = JSON.parse(localStorage.getItem("booking")) || []

    const upDateLSD = getFromLSD.filter(data => data !== id)

    localStorage.setItem("booking", JSON.stringify(upDateLSD))
    const showRemove = book.find(a => a.id === id)
    toast.warning(`UnBook ${showRemove.name}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    })
  }

  const { setCart } = useContext(CardContext)
  const handleScroll = () => {
    setCart(true)
  }


  return (<>

    <section className=' mx-auto max-w-7xl'>
      <div>
        <BerChar book={book} />
      </div>
      {
        book.length === 0 ?
          <div className='flex min-h-[calc(100vh-239px)] justify-center items-center'>
            <div className='flex flex-col items-center space-y-4'>
              <h1 className='font-bold text-center text-3xl '>You have not Book any Appointment yet</h1>
              <p className='text-sm text-center'>If you dont book any doctors Appointment we cant show to you any data</p>
              <NavLink to={'/'} >
                <button onClick={() => { handleScroll() }} className='btn border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl bg-blue-200'>Go to see all Doctors</button>
              </NavLink>
            </div>
          </div>
          : <div className='text-center'>
            <h1 className='text-3xl font-bold mt-1'>My Today Appointments</h1>
            <p className='text-sm mb-4 text-gray-500 '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          </div>
      }
      <div className='space-y-4'>
        {
          book.map((data, i) => <ShowBooking key={i} data={data} handleBooking={handleBooking}></ShowBooking>)
        }
      </div>
      <ToastContainer />
    </section >
  </>
  );
};
export default Booking;