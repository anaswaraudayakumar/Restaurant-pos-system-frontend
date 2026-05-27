import React from 'react'
import { FaCheckDouble, FaCircle, FaUser } from 'react-icons/fa'

function OrderList() {
  return (
    <div className='flex items-center gap-6 pb-6'>
        <button className='bg-amber-400 p-3 text-xl font-bold rounded-lg'><FaUser/></button>
        <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start gap-1 '>
                <h1 className='text-white text-lg font-semibold tracking-wide '>Customer Name</h1>
                <p className='text-gray-100 text-sm'>8 Items</p>
            </div>
            <div>
                <h1 className='text-yellow-400 font-semibold border border-yellow-400 rounded-lg p-1'>Table No:3</h1>
            </div>
            <div className='flex flex-col items-start gap-2 '>
                <p className=' text-green-600 px-4'><FaCheckDouble className='inline mr-2'/>
                Ready</p>
                <p className='text-gray-100 text-sm'> <FaCircle className='inline mr-2 text-green-600'/> Ready to Serve</p>
            </div>
        </div>
    </div>
  )
}

export default OrderList