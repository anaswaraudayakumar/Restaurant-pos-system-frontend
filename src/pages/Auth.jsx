import React, { useState } from 'react'
import restaurant from '../assets/images/restaurant.png'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
const Auth = () => {
  const [isRegister,SetIsRegister] = useState(false)
  return (
    <div className="flex min-h-screen w-full">

      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">

        {/* BG Image */}
        <img
          src={restaurant}
          alt="Restaurant"
          className="w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-80"></div>

        {/* Quote */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "Great food is more than just taste — it is an experience that brings people
          together, creates unforgettable memories, and turns first-time visitors into
          lifelong customers."
          <br />
          <span className="block mt-4 text-yellow-400">
            - Founder of Maison Lumière
          </span>
        </blockquote>

      </div>
      {/* right */}
      <div className='w-1/2 min-h-screen bg-gray-800 p-10'>
        <div className='flex flex-col items-center gap-2 '>
          <img className='h-18 w-18 ' src="/logo.png" alt="logo" />
          <h1  className='text-lg font-semibold text-white tracking-wide'>Maison Lumière</h1>
        </div>
        <h2 className='text-4xl text-center mt-10 font-semibold text-amber-400 mb-10'>
          {isRegister? "Employee Registration":"Employee Login"}
          </h2>
        {/* components */}
        {
          isRegister? <Register SetIsRegister={SetIsRegister}/> :<Login/>
        }
        <div className=' flex justify-center mt-6'>
          <p className='text-sm text-gray-200'>
           {isRegister?" Already Have An account?":" Don't Have An account?"}
            <a onClick={()=>SetIsRegister(!isRegister)} className=' text-amber-400 font-semibold hover:underline' href="#">
              {isRegister?"Sign In":"Sign Up "}
              </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth