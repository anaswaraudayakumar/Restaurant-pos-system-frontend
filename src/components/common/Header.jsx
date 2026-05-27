import React from 'react'
import { FaBell, FaSearch, FaUser } from 'react-icons/fa'

function Header() {
  return (
    <>
      <div className='bg-gray-900 flex  justify-between items-center' >
        <div className='flex gap-1.5'>
           {/* logo */}
          <img src='/logo.png' width={'80px'} height={'80px'} className='px-2' alt="res_logo" />
              {/* name */}
          <p className=' py-4 font-black text-gray-100 text-2xl '>Menu Metrix</p>
        </div>
        {/* search */}
        
        <div className='border border-gray-300 p-2 md:flex  hidden  gap-1 rounded  '>
          <FaSearch className='text-xl text-gray-100 pt-1'/>
          <input type="text" placeholder='Search ' className='text-gray-100 text-xl outline-none ' />  
        </div>
       <div className='flex items-center gap-2 justify-between px-4 py-3'>
        {/* Bell Icon */}
  <div className='p-2  cursor-pointer  transition'>
    <FaBell className='text-white text-xl' />
  </div>
  {/* User Profile */}
  <div className='flex items-center gap-3 border border-gray-300 rounded px-3 py-2'>
    <FaUser className='text-4xl text-gray-100' />
    <div>
      <p className='text-xl text-gray-100 font-medium'>User</p>
      <p className='text-sm text-gray-400'>role</p>
    </div>
  </div>

  

</div>
      </div>
     
    </>
  )
}

export default Header