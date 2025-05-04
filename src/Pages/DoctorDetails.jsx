
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { setDataToLs } from '../uitilits/Getdata';
import { CiWarning } from "react-icons/ci";

import { Suspense, useEffect } from 'react';
import LOading from '../Components/LOading';
const DoctorDetails = () => {

  const data = useLoaderData();

  const { regNo } = useParams();
  const showBookingDetails = useNavigate()
  const details = data.find(data => data.registration_no === regNo);

  const { id, name, image, visit_price, available_days, isBest, current_working, experience, registration_no, degree, description } = details;

  const handleDetails = (id) => {
    const asaNaNai = setDataToLs(id)
    if (!asaNaNai) {
      toast.error(`Booking already done you will be redirecting to booking page in 2s`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      })
      setTimeout(() => {
        showBookingDetails("/my-booking")
        window.scrollTo(0, 0)
      }, 2000)
      return
    }
    toast.success(`your favorites doctors ${name} is added`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    })
    setTimeout(() => {
      showBookingDetails("/my-booking")
      window.scrollTo(0, 0)
    }, 2000)
  }
  useEffect(() => {
    name ? document.title = `Jhakana Doctors | ${name}` : ''
  }, [name])
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const isAvailable = available_days.includes(today)
  return (
    <Suspense fallback={<LOading />}>
      <section className='space-y-8'>
        <div className='py-6 px-3 bg-white rounded-2xl'>
          <h1 className='text-3xl text-center font-bold'>
            Doctor’s Profile Details
          </h1>
          <p className='mt-2 text-center '>
            {description}
          </p>
        </div>
        <div className='bg-white p-4 rounded-3xl '>

          <div className='bg-white lg:px-4 grid grid-cols-1 lg:grid-cols-3 gap-3 relative'>

            <div className=''>
              <img className='rounded-2xl lg:h-[300px] w-full object-cover' src={image} alt="" />
            </div>
            <div className='col-span-2 justify-between flex flex-col'>
              <h1 className='text-3xl font-bold '>{name}
                <span className={` absolute  top-0 right-0 text-[15px] ${isBest ? ' text-white pb-1 bg-green-700  lg:z-20  lg:block rounded-2xl px-2' : ''}`}>{isBest ? 'pro' : ''}
                </span>
              </h1>
              <h3 className='text-gray-500 font-bold text-sm capitalize'>{degree}</h3>
              <h1>{experience}+</h1>
              <p className='border-b border-dashed pb-1 border-gray-400 font-bold text-lg '>
                <span className='text-gray-500 font-normal text-lg'>Working at : </span>
                {current_working}
              </p>
              <p className='border-b border-dashed flex items-center pb-1 border-gray-400'>
                <span> <PiTrademarkRegisteredLight size={20} color='blue' /></span>
                {registration_no}
              </p>

              <div className='flex lg:gap-4 flex-col lg:flex-row lg:items-center gap-2'>
                <p className='font-bold'>Availability</p>
                <div className='flex flex-wrap gap-2'>
                  {
                    available_days.map((day, i) => (
                      <span key={i} className='bg-yellow-100 grow text-center border border-yellow-400 text-yellow-700 font-bold rounded-3xl px-3 text-sm'>
                        {day}
                      </span>
                    ))
                  }
                </div>
              </div>
              <div >
                <p className='text-lg text-center lg:text-left'>
                  Consultation Fee: Taka :<span className='text-blue-600'> {visit_price}</span>  (incl. Vat) <span className='text-blue-600'> Per consultation</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-3xl space-y-4 px-4 py-8'>
          <h1 className='text-3xl text-center'>Book an Appointment</h1>
          <div className='lg:flex text-center space-y-2 lg:space-y-0 lg:justify-between'>
            <h3 className='text-lg font-bold '>Book an Appointment</h3>
            <h4>
              {isAvailable
                ?
                <span className='px-4 bg-green-100 rounded-2xl py-1 text[14px] border border-green-600 font-bold text-green-600'>Doctor Available Today</span> :
                <span className='px-4 bg-yellow-100 rounded-2xl py-1 text[14px] border border-yellow-400 text-yellow-700 font-bold '>Doctor Not Available</span>}
            </h4>
          </div>
          <span className='flex justify-center'>
            {
              isAvailable
              &&
              <p className='text-yellow-800  bg-yellow-100 text-[10px] lg:text-sm  px-2 rounded-3xl flex '><span><CiWarning size={20} /></span> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            }
          </span>
          <button
            onClick={() => handleDetails(id)}
            disabled={!isAvailable}
            className={`w-full text-xl py-2 transition rounded-3xl border-blue-400
               ${isAvailable ?
                'bg-blue-200 hover:bg-blue-600 hover:text-white'
                : 'bg-red-200 hover:bg-red-600 cursor-not-allowed'
              }`}>
            {isAvailable ? "Book Appointment Now" : "Doctor Unavailable"}
          </button>

          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </section>
    </Suspense >

  );
};

export default DoctorDetails;