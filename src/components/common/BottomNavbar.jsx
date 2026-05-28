import React, { useState } from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { setCustomer } from '../../redux/slices/customerSlice'

function BottomNavbar() {
  const navigate =useNavigate(0)
  const location = useLocation()
  const dispatch = useDispatch()
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [guestCount,setGuestCount] = useState(0)
  const openModal=()=>setIsModalOpen(true)
  const closeModal=()=>setIsModalOpen(false)
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const increment = ()=> {
    if(guestCount >=6) return
    setGuestCount((prev) => prev +1)
  }
  const decrement = ()=> 
     {
    if(guestCount <=0) return
    setGuestCount((prev) => prev -1)
  }
  const isActive =(path)=>location.pathname === path
   
  const handleOrderCreate = ()=>{
    //data to store
    dispatch(setCustomer({name,phone,guests:guestCount}))
    navigate("/tables")
  }

  
    return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-900 flex justify-around p-3'>
        <button onClick={()=> navigate("/")} className= {`flex items-center justify-center font-bold ${isActive("/")? "text-white bg-neutral-600":"text-gray-400"} w-30 rounded`} > 
          <FaHome className='inline mr-4 text-2xl text-white '/>Home</button>
        <button onClick={()=> navigate("/orders")} 
       className= {`flex items-center justify-center font-bold ${isActive("/orders")? "text-white bg-neutral-600":"text-gray-400"} w-30 rounded`} > <MdOutlineReorder  className='inline mr-4 text-2xl text-white '/>Orders</button>
        <button onClick={()=> navigate("/tables")} className= {`flex items-center justify-center font-bold ${isActive("/tables")? "text-white bg-neutral-600":"text-gray-400"} w-30 rounded`} >   <MdTableBar  className='inline mr-4 text-2xl text-white '/>Tables</button>
        <button className='text-white hover:cursor-pointer bg-gray-800 p-2 rounded-lg ' > <CiCircleMore  className='inline mr-4 text-2xl text-white ' />More</button>
        <button onClick={openModal} 
        disabled={isActive("/tables") || isActive("/menu")}
       className='text-white p-3 absolute bottom-7 items-center  hover:cursor-pointer font-black text-4xl'><BiSolidDish/></button>
       
  <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">

  <div>
    <label className="block text-neutral-400 mb-2 text-sm font-medium">Customer Name</label>

    <div className="flex items-center rounded-lg p-3 px-4 bg-neutral-900">
      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text"
        name=""
        placeholder="Enter customer name"
        id=""
        className="bg-transparent flex-1 text-white focus:outline-none"
      />
    </div>
  </div>

  <div>
    <label className="block text-neutral-400 mb-2 text-sm font-medium">
      Customer Phone
    </label>

    <div className="flex items-center rounded-lg p-3 px-4 bg-neutral-900">
      <input
      value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        type="number"
        name=""
        placeholder="+91-1234567892"
        id=""
        className="bg-transparent flex-1 text-white focus:outline-none"
      />
    </div>
  </div>

  <div>
    <label className="block mb-2 mt-3 text-sm font-medium text-neutral-400">
      Guest
    </label>

    <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-lg">
      
      <button onClick={decrement} className="text-yellow-500 text-2xl">
        &minus;
      </button>

      <span className="text-white">
        {guestCount} Person
      </span>

      <button onClick={increment} className="text-yellow-500 text-2xl">
        &#43;
      </button>

    </div>
  </div>
  <button onClick={handleOrderCreate} className='w-full bg-yellow-400 text-white rounded-lg py-3 mt-8 hover:bg-yellow-700 '>
    Create Order 
  </button>

</Modal>
    </div>
  )
}

export default BottomNavbar