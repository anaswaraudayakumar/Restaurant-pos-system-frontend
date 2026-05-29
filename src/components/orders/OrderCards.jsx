import React from 'react'
import { FaCircle, FaUser } from 'react-icons/fa'
import { FaCheckDouble } from 'react-icons/fa6'

function OrderCards({order}) {
    const formattedDate = new Date(order.orderDate).toLocaleDateString("en-IN", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit"
  })
   const statusColor = {
    "In Progress": "text-yellow-400",
    "Ready": "text-green-500",
    "Completed": "text-blue-400"
  }
  return (
   <div className='w-100 bg-neutral-800 p-4 rounded-lg mb-4 '>
          <div className='flex items-center gap-5'>
             <button className='bg-amber-400 p-3 text-xl font-bold rounded-lg'><FaUser/></button>
           <div className='flex items-center justify-between w-full'>
               <div className='flex flex-col items-start gap-1 '>
                   <h1 className='text-white text-lg font-semibold tracking-wide '>{order?.customerDetails.customerName} </h1>
                   <p className='text-gray-100 text-sm'>#{order?._id.slice(-4)} /Dine in</p>
               </div>
               
               <div className='flex flex-col items-end gap-2 '>
                   <p className=' text-green-600 bg-neutral-600 px-2 py-1 rounded '><FaCheckDouble className='inline mr-2'/>
                   {order?.orderStatus} </p>
                   <p className='text-gray-100 text-sm'> <FaCircle className='inline mr-2 text-green-600'/>{order?.orderStatus}</p>
               </div>
           </div>
          </div>
           <div className='flex justify-between items-center mt-4 text-gray-200'>
            <p>{formattedDate}</p>
            <p>{order?.items.length} Items</p>
           </div>
           <hr className=' w-full border-t border-gray-500 ' />
           <div className='flex items-center justify-between'>
            <h1 className='text-white text-xl font-bold'>Total</h1>
            <p className='text-white text-lg font-semibold'>₹ {order?.bills.totalWithTax.toFixed(2)} </p>
           </div>
       </div>
  )
}

export default OrderCards