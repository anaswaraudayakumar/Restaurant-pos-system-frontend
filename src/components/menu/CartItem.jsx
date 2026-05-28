import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { FaNotesMedical } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';
function CartItem() {
  const cartData = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handleRemove = (itemId)=>{
  dispatch(removeItem(itemId))
  }
  return (
    <div className="px-4 py-2">
  <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
    Order Details
  </h1>
  <div className="mt-4 overflow-auto scrollbar-hide h-95">
   {
      cartData.length ===0 ? (<p className='text-gray-400 text-sm flex justify-center items-center h-95'>Cart is Empty,Add items</p>)
      :
      cartData.map((item)=>{
        return(
           <div key={item.id} className="bg-neutral-800 rounded-lg px-4 py-4 mb-2">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 font-semibold tracking-wide text-md">
         {item.name}
        </h1>
        <p className="text-gray-300 font-semibold">x{item.quantity}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          < IoTrashBinSharp
          onClick={()=>handleRemove(item.id)}
           className="text-gray-300 cursor-pointer" size={20} />
          <FaNotesMedical className="text-gray-300 cursor-pointer" size={20} />
        </div>
        <p className="text-[#f5f5f5] text-md font-bold">₹{item.price}</p>
      </div>
    </div>
    
        )
      })
   }
    
  </div>
  
</div>
  )
}

export default CartItem