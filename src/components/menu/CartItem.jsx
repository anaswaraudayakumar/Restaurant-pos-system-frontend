import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../redux/slices/cartSlice';
import { removeCustomer } from '../../redux/slices/customerSlice';
import BillInfo from './BillInfo';           // adjust path
import { useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { FaNotesMedical } from 'react-icons/fa';

function CartItem() {
  const cartData = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [showBill, setShowBill] = useState(false)

  const handleRemove = (itemId) => dispatch(removeItem(itemId))

  // ✅ called by BillInfo after successful order
  const handleOrderSuccess = () => {
    dispatch(clearCart())
    dispatch(removeCustomer())
    setShowBill(false)
    alert("Order placed and cart cleared!")
  }

  return (
    <div className="px-4 py-2 ">
      <div className='flex justify-between items-start'>
        <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
          Order Details
        </h1>
        {/* ✅ Assign toggles the bill panel */}
        <button
          onClick={() => setShowBill(prev => !prev)}
          className='py-3 px-2 mt-1 rounded-lg bg-gray-700 hover:bg-neutral-800 text-white'>
          {showBill ? "Hide Bill" : "Assign"}
        </button>
      </div>

      <div className="mt-4 overflow-auto scrollbar-hide h-95">
        {cartData.length === 0
          ? <p className='text-gray-400 text-sm flex justify-center items-center h-95'>Cart is Empty, Add items</p>
          : cartData.map((item) => (
            <div key={item.id} className="bg-neutral-800 rounded-lg px-4 py-4 mb-2">
              <div className="flex items-center justify-between">
                <h1 className="text-gray-300 font-semibold tracking-wide text-md">{item.name}</h1>
                <p className="text-gray-300 font-semibold">x{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <IoTrashBinSharp onClick={() => handleRemove(item.id)} className="text-gray-300 cursor-pointer" size={20} />
                  <FaNotesMedical className="text-gray-300 cursor-pointer" size={20} />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">₹{item.price}</p>
              </div>
            </div>
          ))
        }
      </div>

      {/* ✅ BillInfo slides in when Assign is clicked */}
      {showBill && <BillInfo onOrderSuccess={handleOrderSuccess} />}
    </div>
  )
}

export default CartItem