import React, { useEffect, useState } from 'react'
import BottomNavbar from '../components/common/BottomNavbar'
import OrderCards from '../components/orders/OrderCards'
import BackDrop from '../components/common/BackDrop'
import Header from '../components/common/Header'
import { allOrdersAPI } from '../services/allApi'

function Orders() {
  const [status,setStatus] = useState("all")
  const [orders,setOrders] = useState([])
  const[loading,setLoading]= useState(true)
  useEffect(()=>{
    const fetchOrders = async ()=>{
      try {
        const response = await allOrdersAPI()
        setOrders(response.data.orders)
      } catch (error) {
        console.log(error);
        
      }finally{
        setLoading(false)
      }
     
    }
     fetchOrders()
    },[])
     const filteredOrders = orders.filter((order) => {
    if (status === "all") return true
    if (status === "progress") return order.orderStatus === "In Progress"
    if (status === "ready") return order.orderStatus === "Ready"
    if (status === "completed") return order.orderStatus === "Completed"
  })
  return (
    <>
    <Header/>
      <section  className=' bg-gray-950 min-h-screen overflow-hidden'>
        <div className='flex items-center justify-between px-10 py-4 '>
         <div className=' flex items-center gap-4 '>
          <BackDrop/> 
          <h1 className='text-white text-2xl font-bold tracking-wider'>Orders</h1>
          </div>
          <div className='flex items-center  justify-around gap-4 '>
            <button onClick ={()=>setStatus("all")} className={`${status==="all" && "bg-gray-700 rounded-lg px-5 py-2 "} text-gray-300 text-lg  font-semibold`}>All</button>
            <button  onClick ={()=>setStatus("progress")} className={`${status==="progress" && "bg-gray-700 rounded-lg px-5 py-2 "} text-gray-300 text-lg  font-semibold`}>In Progress</button>
            <button onClick ={()=>setStatus("ready")}  className={`${status==="ready" && "bg-gray-700 rounded-lg px-5 py-2 "} text-gray-300 text-lg  font-semibold`}>Ready</button>
            <button onClick ={()=>setStatus("completed")} className={`${status==="completed" && "bg-gray-700 rounded-lg px-5 py-2 "} text-gray-300 text-lg  font-semibold`}>Completed</button>
  
  
          </div>
        </div>
       <div className='flex gap-1 flex-wrap items-center px-16 py-4 mb-12'> 
         { 
         loading ? (
           <p className='text-white'>Loading Orders</p>
         ):  filteredOrders.length === 0 ? ( <p className='text-gray-400'>No Order Found</p> )
         :(
            filteredOrders.map((order) => (
              <OrderCards key={order._id} order={order} />  
            ))
         )

         }
  
       </div>
       
        <BottomNavbar/>
      </section>
    </>
  )
}

export default Orders