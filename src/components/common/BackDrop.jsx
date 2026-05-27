import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

function BackDrop() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate(-1)} className='bg-blue-700 p-3 text-xl font-bold rounded-full text-white '><IoArrowBackOutline/></button>
    </div>
  )
}

export default BackDrop