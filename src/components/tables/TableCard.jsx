import React from 'react'
import { getInitialName, getRandomBackGround } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateTable } from '../../redux/slices/customerSlice'
import { updateOrderAPI } from '../../services/allApi'

function TableCard({name,status,initials,seats,tableId, orderId}) {

   const dispatch = useDispatch()
   const navigate = useNavigate()
    const handleClick = async ()=>{
        if(status === "Booked") return
        try {
            await updateOrderAPI(tableId,{status:"Booked",orderId:""})
            dispatch(updateTable({tableNo:name,tableId}))
            navigate('/menu')
        } catch (error) {
             console.error("Failed to book table:", error)
        }
    }
  return (
    <div onClick={()=>handleClick()} className='w-75 bg-neutral-800 hover:bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer '>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-white text-xl font-semibold'>Table {name}</h1>
            <p className={`${status==="Booked"? "text-green-600 bg-green-300 ":" text-white bg-amber-400 "}px-2  py-1 rounded-lg`}>{status}</p>
        </div>
        <div className='flex items-center justify-center mt-5 mb-3 '>
            <h1   style={{ backgroundColor:initials? getRandomBackGround() :"#1f1f1f"  }}
            className= 'text-white rounded-full p-3 text-xl'>{getInitialName(initials)||'N/A'}</h1>
        </div>
        <p className='text-gray-400 text-xs'>Seats:<span className='text-white'>{seats}</span></p>
    </div>
  )
}

export default TableCard