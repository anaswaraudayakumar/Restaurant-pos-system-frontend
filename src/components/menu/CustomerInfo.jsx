import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getDate, getInitialName } from '../../utils'

function CustomerInfo() {
  const customerData = useSelector(state=>state.customer)
  const [dateAndTime,setDateAndTime] = useState(new Date())
  return (
     <div className='flex items-center justify-between px-4 py-3'>
        <div className='flex flex-col items-start '>
          <h1 className='text-md text-white font-semibold tracking-wide'>{customerData.customerName || "Customer Name"}</h1>
          <p className='text-xs text-gray-300 font-medium mt-1'>{customerData.orderId || "NA"} / Dine in</p>
          <p className='text-xs text-gray-300 font-medium mt-2'>{getDate(dateAndTime)} </p>
        </div>
        <button className='bg-yellow-500 text-xl font-bold rounded-lg p-2'>{getInitialName(customerData.customerName) || "CN"}</button>
      </div>
  )
}

export default CustomerInfo