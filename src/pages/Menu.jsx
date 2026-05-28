import React from 'react'
import BottomNavbar from '../components/common/BottomNavbar'
import BackDrop from '../components/common/BackDrop'
import { MdRestaurantMenu } from 'react-icons/md'
import MenuContainer from '../components/menu/MenuContainer'

import CustomerInfo from '../components/menu/CustomerInfo'
import CartItem from '../components/menu/CartItem'
import BillInfo from '../components/menu/BillInfo'
import { useSelector } from 'react-redux'
import Header from '../components/common/Header'

function Menu() {
  const customerData = useSelector(state=>state.customer)
  return (
   <>
   <Header/>
      <section  className=' bg-gray-950 min-h-screen overflow-hidden gap-3  flex'>
      {/* left div */}
       <div className='flex-3'>
          <div className='flex items-center justify-between px-10 py-4 '>
           <div className=' flex items-center gap-4 '>
            <BackDrop/> 
            <h1 className='text-white text-2xl font-bold tracking-wider'>Menu</h1>
            </div>
            <div className='flex items-center  justify-around gap-4 '>
              <div className='flex items-center gap-3  cursor-pointer'>
                  <MdRestaurantMenu className='text-4xl text-gray-100' />
                  <div>
                    <p className='text-xl text-gray-100 font-medium'>{customerData.customerName || "Customer Name" }</p>
                    <p className='text-sm text-gray-400'>{customerData.tableNo || "N?A"}</p>
                  </div>
                </div>
             
            </div>
            
          </div>
          <MenuContainer/>
       </div>
       {/* Right div  */}
       <div className='flex-1  bg-neutral-950 mt-4 mr-3 h-200 mb-12 rounded-lg pt-2'>
        {/* customer info */}
        <CustomerInfo/>
        <hr className=' border-gray-700'/>
        {/* cart items */}
        <CartItem/>
        <hr className=' border-gray-700'/>
  
        {/* bills */}
         <BillInfo/>
       </div>
          <BottomNavbar/>
      </section>
   </>
  )
}

export default Menu