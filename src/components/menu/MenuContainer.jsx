import React, { useState } from 'react'
import { menu } from '../../constants'
import { GrRadialSelected } from 'react-icons/gr'
import { FaShoppingBasket } from 'react-icons/fa'


function MenuContainer() {
  const [selected, setSelected] = useState(menu[0])
  const [itemCount,setItemCount] = useState(0)
  const[itemId,setItemId] = useState()

  const increment = (id)=> {
    setItemId(id)
    if(itemCount >=8) return
    setItemCount((prev) => prev +1)
  }
  const decrement = (id)=> {
    setItemId(id)
    if(itemCount <=0) return
    setItemCount((prev) => prev -1)
  }
  
  return (
    <>
      <div className=' grid grid-cols-4 px-10 gap-3 py-4 w-full '>
        {
          menu.map((item) => {
            return (
              <div key={item.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-25 cursor-pointer '
                style={{ backgroundColor: item.bgColor }}
                onClick={() => {
                  setSelected(item)
                  setItemId(0)
                  setItemCount(0)
                }}
              >
                <div className='flex items-center justify-between w-full'>
                  <h1 className='text-white tet-lg font-semibold '>{item.icon} {item.name} </h1>
                  {
                    selected.id == item.id &&
                    <GrRadialSelected className='text-white' size={20} />}
                </div>
                <p className='text-gray-200 text-sm font-semibold'>{item.items.length} Items</p>
              </div>
            )
          })
        }
      </div>
      <hr className='border-neutral-800 border-t-2 mt-4' />
      <div className=' grid grid-cols-4 px-10 gap-3 py-4 w-full mb-13'>
        {
          selected?.items.map((item) => {
            return (
              <div key={item.id} className='flex flex-col items-start justify-between p-4  rounded-lg h-30 cursor-pointer '
              style={{ backgroundColor: item.bgColor }}
               >
                <div className='flex items-start justify-between w-full'>
                  <h1 className='text-white text-lg font-semibold '> {item.name} </h1>
                  <button className='bg-green-950 rounded-lg p-2 text-white' ><FaShoppingBasket size={20}/></button>
                </div>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-white text-sm font-semibold'>₹{item.price}</p>
                  <div className="flex items-center  justify-between bg-neutral-900 px-3 py-2 rounded-lg gap-6 ">

                    <button
                        onClick={()=>decrement(item.id)}
                      className="text-yellow-500 text-2xl">
                      &minus;
                    </button>

                    <span className="text-white">
                      {item.id === itemId? itemCount:"0"}
                    </span>

                    <button
                      onClick={()=>increment(item.id)} 
                      className="text-yellow-500 text-2xl">
                      &#43;
                    </button>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default MenuContainer