import React, { useState } from 'react'
import BottomNavbar from '../components/common/BottomNavbar'
import OrderCards from '../components/orders/OrderCards'
import BackDrop from '../components/common/BackDrop'
import Header from '../components/common/Header'

function Orders() {
  const [status,setStatus] = useState("all")
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
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
        <OrderCards/>
  
        
  
       </div>
       
        <BottomNavbar/>
      </section>
    </>
  )
}

export default Orders