import React from 'react'
import { getRandomBackGround } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateTable } from '../../redux/slices/customerSlice'

function TableCard({name,status,initials,seats}) {

   const dispatch = useDispatch()
   const navigate = useNavigate()
    const handleClick = (name)=>{
        if(status === "Booked") return
        dispatch(updateTable({tableNo:name}))
        navigate('/menu')
    }
  return (
    <div onClick={()=>handleClick(name)} className='w-75 bg-neutral-800 hover:bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer '>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-white text-xl font-semibold'>{name}</h1>
            <p className={`${status==="Booked"? "text-green-600 bg-green-300 ":" text-white bg-amber-400 "}px-2  py-1 rounded-lg`}>{status}</p>
        </div>
        <div className='flex items-center justify-center mt-5 mb-3 '>
            <h1   style={{ backgroundColor: getRandomBackGround() }}
            className= 'text-white rounded-full p-5 text-xl'>{initials}</h1>
        </div>
        <p className='text-gray-400 text-xs'>Seats:<span className='text-white'>{seats}</span></p>
    </div>
  )
}

export default TableCard