import React from 'react'

function BillInfo() {
  return (
    <>
    <div className='flex items-center justify-between px-5 mt-2 '>
  <p className='text-xs text-gray-400 font-medium mt-2'>Items(4)</p>
  <h1 className='text-white text-md font-bold'>₹240</h1>
</div>
<div className='flex items-center justify-between px-5 mt-2'>
  <p className='text-xs text-gray-400 font-medium mt-2'>Tax(5.25%)</p>
  <h1 className='text-white text-md font-bold'>₹24</h1>
</div>
<div className='flex items-center gap-3 px-5 mt-4'>
  <button className='bg-neutral-800 px-4 py-3 w-full rounded-lg text-white font-semibold'>Cash</button>
  <button className='bg-neutral-800 px-4 py-3 w-full rounded-lg text-white font-semibold'>Online</button>
</div>
<div className='flex items-center gap-3 px-5 mt-4 '>
  <button className='bg-blue-800 px-4 py-3 w-full rounded-lg text-white font-semibold text-lg'>Print Receipt</button>
  <button className='bg-yellow-400 px-4 py-3 w-full rounded-lg text-neutral-800 font-semibold text-lg'>Place Order</button>
</div>
    </>
  )
}

export default BillInfo