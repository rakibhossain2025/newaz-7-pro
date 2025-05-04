import React from 'react';
import { NavLink } from 'react-router';

export const ReUseNav = () => {
  return (
    <>
      <NavLink to={"/"} className={({ isActive }) => isActive ? " text-blue-500  border-b-2 delay-150 transition pb-0" : "hover:border-b-2 "}>
        <li className='pb-0 hover:text-red-500 hover:transition hover:delay-75 '>Home</li>
      </NavLink >
      <NavLink className={({ isActive }) => isActive ? " text-blue-500  border-b-2 delay-150 transition pb-0" : "hover:border-b-2"} to={"/my-booking"}>
        <li className='pb-0  hover:text-red-500 hover:transition hover:delay-75'>My-Bookings</li>
      </NavLink>

      <NavLink to={"/blog"} className={({ isActive }) => isActive ? " text-blue-500  border-b-2 delay-150 transition pb-0" : "hover:border-b-2 "}>
        <li className='pb-0 hover:text-red-500 hover:transition hover:delay-75'>
          Blogs
        </li>
      </NavLink>
      <NavLink to={"/page-not-found"} className={({ isActive }) => isActive ? " text-blue-500  border-b-2 delay-150 transition pb-0" : "hover:border-b-2 "}>
        <li className='pb-0 hover:text-red-500 hover:transition hover:delay-75'>
          Contact Us
        </li>
      </NavLink>
    </>
  );
};

export const CustomBtn = ({ name, widh }) => {
  return (
    <button className={`btn border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl bg-blue-200 ${widh}`}> {name}</button >

  )
}