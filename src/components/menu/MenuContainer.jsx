import React, { useState } from 'react'
import { menu } from '../../constants'
import { GrRadialSelected } from 'react-icons/gr'
import { FaShoppingBasket } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
function MenuContainer() {
  const [selected, setSelected] = useState(menu[0])
  const [itemCount, setItemCount] = useState(0)
  const [itemId, setItemId] = useState()
  const dispatch = useDispatch()
  const increment = (id) => {
    setItemId(id)
    if (itemCount >= 8) return
    setItemCount((prev) => prev + 1)
  }

  const decrement = (id) => {
    setItemId(id)
    if (itemCount <= 0) return
    setItemCount((prev) => prev - 1)
  }
  const handleAddToCart = (menuItem) =>{
     if(itemCount===0) return

     const { name,price}= menuItem
    const newObject = { id: Date.now(),name, pricePerQuantity:price, quantity:itemCount,price:price*itemCount}
    dispatch(addItem(newObject))
    setItemCount(0) 
  }

  return (
    <>
      {/* CATEGORY SECTION */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-10 gap-3 py-4 w-full'>
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-start justify-between p-4 rounded-lg min-h-27.5 cursor-pointer'
              style={{ backgroundColor: item.bgColor }}
              onClick={() => {
                setSelected(item)
                setItemId(0)
                setItemCount(0)
              }}
            >
              <div className='flex items-center justify-between w-full gap-2'>
                <h1 className='text-white text-sm sm:text-lg font-semibold flex items-center gap-2'>
                  {item.icon} {item.name}
                </h1>

                {selected.id == item.id && (
                  <GrRadialSelected className='text-white shrink-0' size={20} />
                )}
              </div>

              <p className='text-gray-200 text-xs sm:text-sm font-semibold'>
                {item.items.length} Items
              </p>
            </div>
          )
        })}
      </div>

      <hr className='border-neutral-800 border-t-2 mt-4' />

      {/* ITEMS SECTION */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-10 gap-3 py-4 w-full mb-20'>
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className='flex flex-col items-start justify-between p-4 rounded-lg min-h-35 cursor-pointer'
              style={{ backgroundColor: item.bgColor }}
            >
              <div className='flex items-start justify-between w-full gap-2'>
                <h1 className='text-white text-base sm:text-lg font-semibold'>
                  {item.name}
                </h1>

                <button
                onClick ={()=>handleAddToCart(item)}
                 className='bg-green-950 rounded-lg p-2 text-white shrink-0'>
                  <FaShoppingBasket  size={20} />
                </button>
              </div>

              <div className='flex items-center justify-between w-full gap-2 mt-4'>
                <p className='text-white text-sm font-semibold'>
                  ₹{item.price}
                </p>

                <div className='flex items-center justify-between bg-neutral-900 px-3 py-1 rounded-lg gap-4 sm:gap-6'>
                  <button
                    onClick={() => decrement(item.id)}
                    className='text-yellow-500 text-2xl'
                  >
                    &minus;
                  </button>

                  <span className='text-white'>
                    {item.id === itemId ? itemCount : '0'}
                  </span>

                  <button
                    onClick={() => increment(item.id)}
                    className='text-yellow-500 text-2xl'
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MenuContainer