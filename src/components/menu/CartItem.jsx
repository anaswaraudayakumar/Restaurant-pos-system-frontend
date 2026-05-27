import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { FaNotesMedical } from 'react-icons/fa6'
function CartItem() {
  return (
    <div className="px-4 py-2">
  <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
    Order Details
  </h1>
  <div className="mt-4 overflow-y-auto scrollbar-hide h-95">
    <div className="bg-neutral-800 rounded-lg px-4 py-4 mb-2">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 font-semibold tracking-wide text-md">
          Chicken Tikka
        </h1>
        <p className="text-gray-300 font-semibold">x2</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          < IoTrashBinSharp className="text-gray-300 cursor-pointer" size={20} />
          <FaNotesMedical className="text-gray-300 cursor-pointer" size={20} />
        </div>
        <p className="text-[#f5f5f5] text-md font-bold">123</p>
      </div>
    </div>
    <div className="bg-neutral-800 rounded-lg px-4 py-4 mb-2">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 font-semibold tracking-wide text-md">
          Chicken Tikka
        </h1>
        <p className="text-gray-300 font-semibold">x2</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          < IoTrashBinSharp className="text-gray-300 cursor-pointer" size={20} />
          <FaNotesMedical className="text-gray-300 cursor-pointer" size={20} />
        </div>
        <p className="text-[#f5f5f5] text-md font-bold">123</p>
      </div>
    </div>
    
  </div>
  
</div>
  )
}

export default CartItem