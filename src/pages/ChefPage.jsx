import React from 'react'
import Header from '../components/common/Header'
import RecentOrders from '../components/chefRecentOrder/RecentOrdersChef'

function ChefPage() {
  return (
    <>
      <Header />

      <div className="bg-gray-950 min-h-[calc(100vh-5rem)] flex flex-col p-6 gap-4">

        <h1 className="text-white text-2xl font-semibold">
          Orders
        </h1>

        <div className="w-full">
          <RecentOrders />
        </div>

      </div>
    </>
  )
}
export default ChefPage