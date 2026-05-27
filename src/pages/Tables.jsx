import React, { useState } from 'react'
import BottomNavbar from '../components/common/BottomNavbar'
import BackDrop from '../components/common/BackDrop'
import TableCard from '../components/tables/TableCard'
import { tables } from '../constants'

function Tables() {
    const [status,setStatus] = useState("all")
  return (
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
                    tables.map((table)=>{
                        return (
                             <TableCard key={table.id} id={table.id} name={table.name} status={table.status} initials={table.initial} seats={table.seats}/>
                        )
                    })
                   
                    
                }
                
            
 

        </div>
        <BottomNavbar/>
    </section>
  )
}

export default Tables