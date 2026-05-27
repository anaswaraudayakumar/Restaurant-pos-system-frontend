import React from 'react'

function MiniCard({title,icon,number,footNumber}) {
  return (
    <div className='bg-neutral-800 py-5 px-5 rounded w-[50%]'>
        <div className='flex items-start justify-between '>
            <h1 className='text-white text-lg font-semibold tracking-wide'>{title}</h1>
            <button className={`${title==="Total Earnings"? "bg-green-500":"bg-yellow-500"} p-3 rounded text-white text-2xl`}>{icon}</button>
        </div>
        <div>
            <h1 className='text-white text-4xl font-bold mt-5 '>{title === "Total Earnings"?`${number}`: number}</h1>

            <h1 className='text-white text-lg mt-2 '><span className='text-green-600 ' >{footNumber}%</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard