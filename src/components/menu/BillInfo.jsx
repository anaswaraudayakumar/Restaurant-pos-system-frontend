import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../../redux/slices/cartSlice'

function BillInfo() {
  const cartData = useSelector(state=>state.cart)
  const totalPrice = useSelector(getTotalPrice)
  const taxRatePerItem = 4.32
  const tax =(totalPrice*taxRatePerItem)/100
  const totalPriceWithTax = totalPrice + tax
  return (
    <>
    <div className='flex items-center justify-between px-5 mt-2   '>
  <p className='text-xs text-gray-400 font-medium mt-2'>Items({cartData.length})</p>
  <h1 className='text-white text-md font-bold'>₹{totalPrice.toFixed(2)}</h1>
</div>
<div className='flex items-center justify-between px-5 mt-2'>
  <p className='text-xs text-gray-400 font-medium mt-2'>Tax(4.32%)</p>
  <h1 className='text-white text-md font-bold'>₹{tax.toFixed(2)}</h1>
</div>
<div className='flex items-center justify-between px-5 mt-2'>
  <p className='text-xs text-gray-400 font-medium mt-2'>Total with Tax</p>
  <h1 className='text-white text-md font-bold'>₹{totalPriceWithTax.toFixed(2)}</h1>
</div>
<div className='flex items-center gap-3 px-5 mt-4'>
  <button className='bg-neutral-800 px-4 py-3 w-full rounded-lg text-white font-semibold'>Cash</button>
  <button className='bg-neutral-800 px-4 py-3 w-full rounded-lg text-white font-semibold'>Online</button>
</div>
<div className='flex items-center gap-3 px-5 mt-4'>
  <button className='bg-blue-800 px-3 py-3 w-full rounded-lg text-white font-semibold text-lg'>Print Receipt</button>
  <button className='bg-yellow-400 px-4 py-3 w-full rounded-lg text-neutral-800 font-semibold text-lg'>Place Order</button>
</div>
    </>
  )
}

export default BillInfo