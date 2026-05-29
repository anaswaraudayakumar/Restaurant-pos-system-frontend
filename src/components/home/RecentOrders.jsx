import React, { useEffect, useState } from 'react'
import OrderList from './OrderList'
import { FaSearch } from 'react-icons/fa'
import { allOrdersAPI } from '../../services/allApi'

function RecentOrders() {
  const [orders,setOrders] = useState([])
  const [search, setSearch] = useState("")
  
    useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await allOrdersAPI()
        setOrders(response.data.orders)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrders()
  },[])
  const filteredOrders = orders.filter((order) =>
    order.customerDetails.customerName
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  return (
    <div className='px-8  mt-6 mb-9 pb-2 '>
        <div  className='bg-neutral-800 w-full  rounded '>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-white text-lg font-semibold tracking-wide'>Recent Orders</h1>
                <a className='text-blue-600 ' href="">View All</a>
            </div>
            <div className='flex items-center bg-neutral-950 rounded-lg px-6 py-4 mx-6 '>
              <FaSearch className='text-white '/>
             <input type="text"  onChange={(e) => setSearch(e.target.value)} placeholder='Search recent orders'
             className='bg-neutral-950 outline-none text-white px-1'
             />
            </div>
            {/* order list */}
           <div className='mt-4 px-6 overflow-y-scroll h-75 scrollbar-hide '> 
             {filteredOrders.length === 0                        
            ? <p className='text-gray-400 text-sm text-center py-4'>No orders found</p>
            : filteredOrders.map((order) => (         
                <OrderList key={order._id} order={order} />
              ))
          }


            </div>
        </div>
    </div>
  )
}

export default RecentOrders