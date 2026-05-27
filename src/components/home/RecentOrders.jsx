import React from 'react'
import OrderList from './OrderList'
import { FaSearch } from 'react-icons/fa'

function RecentOrders() {
  return (
    <div className='px-8  mt-6 mb-9 pb-2 '>
        <div  className='bg-neutral-800 w-full  rounded '>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-white text-lg font-semibold tracking-wide'>Recent Orders</h1>
                <a className='text-blue-600 ' href="">View All</a>
            </div>
            <div className='flex items-center bg-neutral-950 rounded-lg px-6 py-4 mx-6 '>
              <FaSearch className='text-white '/>
             <input type="text"  placeholder='Search recent orders'
             className='bg-neutral-950 outline-none text-white px-1'
             />
            </div>
            {/* order list */}
           <div className='mt-4 px-6 overflow-y-scroll h-75 scrollbar-hide '> 
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>



            </div>
        </div>
    </div>
  )
}

export default RecentOrders