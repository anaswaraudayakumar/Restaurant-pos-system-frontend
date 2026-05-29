import React from 'react'
import { popularFoods } from '../../constants'

function PopularDishes() {
  return (
    <div className='my-4 pr-6 pb-14 overflow-hidden'>
        <div className='bg-gray-900 w-full cursor-pointer rounded-lg'>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1 className='text-white text-lg font-semibold tracking-wide'>Popular Dishes</h1>
                <a href="" className='text-blue-600 text-sm font-semibold'>View All</a>
            </div>
            <div className='overflow-y-scroll h-170 scroll-hide' >
                {
                    popularFoods.map((dish)=>{
                        return (
                            <div key={dish.id} className='flex items-center gap-4  bg-neutral-950 rounded-2xl px-6 py-4 mx-6 mt-4 '>
                                <h1 className='text-white font-black text-xl mr-5'>{dish.id<10?`0${dish.id}`: dish.id}</h1>
                                <img src={dish.image} alt={dish.name}
                                 className='w-12.5 h-12.5 rounded-full'
                                />
                                <div>
                                    <h1 className='text-white font-semibold tracking-wide'>{dish.name}</h1>
                                    <p className='text-white text-sm font-semibold mt-1 '><span className='text-gray-400'>Orders:</span>{dish.numberOfOrders}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default PopularDishes