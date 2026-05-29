import React, { useState } from 'react'
import BottomNavbar from '../components/common/BottomNavbar'
import BackDrop from '../components/common/BackDrop'
import TableCard from '../components/tables/TableCard'

import Header from '../components/common/Header'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllTableAPI } from '../services/allApi'
import { toast } from 'react-toastify'

function Tables() {
    const [status,setStatus] = useState("all")
    const {data:responseData,isError} = useQuery({
      queryKey:["tables"],
      queryFn: async()=>{
        return await getAllTableAPI()
      },
      placeholderData: keepPreviousData
    })
    if(isError) {
      toast.error("Something went wrong")
    }
    console.log(responseData);
    
  return (
    <>
    <Header/>
      <section className=' bg-gray-950 min-h-screen overflow-hidden'>
         <div className='flex items-center justify-between px-10 py-4 '>
         <div className=' flex items-center gap-4 '>
          <BackDrop/> 
          <h1 className='text-white text-2xl font-bold tracking-wider'>Tables</h1>
          </div>
           <div className='flex items-center  justify-around gap-4 '>
            <button onClick ={()=>setStatus("all")} className={`${status==="all" && "bg-gray-700 rounded-lg px-5 py-2 "} text-gray-300 text-lg  font-semibold`}>All</button>
            <button onClick ={()=>setStatus("booked")} className={`${status==="booked" && "bg-gray-700 rounded-lg px-5 py-2 "} text-gray-300 text-lg  font-semibold`}>Booked</button>
       
            
  
          </div>
          </div>
          <div  className='flex gap-1 flex-wrap items-center px-16 py-4 mb-12'>
                  {
                      responseData?.data?.tables?.sort((a, b) => a.tableNo - b.tableNo).map((table)=>{
                          return (
                               <TableCard key={table._id} tableId={table._id} name={table.tableNo} status={table.status} initials={table?.currentOrder?.customerDetails?.customerName} 
                               seats={table.seats} orderId={table?.currentOrder?.id}

                               />
                          )
                      })
                     
                      
                  }
                  
              
   
  
          </div>
          <BottomNavbar/>
      </section>
    </>
  )
}

export default Tables