import React from 'react'

function CustomerInfo() {
  return (
     <div className='flex items-center justify-between px-4 py-3'>
        <div className='flex flex-col items-start '>
          <h1 className='text-md text-white font-semibold tracking-wide'>Customer Name</h1>
          <p className='text-xs text-gray-300 font-medium mt-1'>#101/Dine in</p>
          <p className='text-xs text-gray-300 font-medium mt-2'>May 20, 2026 5:23PM</p>
        </div>
        <button className='bg-yellow-500 text-xl font-bold rounded-lg p-2'>CN</button>
      </div>
  )
}

export default CustomerInfo