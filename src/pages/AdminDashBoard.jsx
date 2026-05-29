import React, { useState } from 'react'
import Header from '../components/common/Header'
import { MdCategory, MdTableBar } from 'react-icons/md';
import { BiSolidDish } from 'react-icons/bi';
import Metrics from '../components/dashboard/Metrics';
import RecentOrders from '../components/dashboard/RecentOrders';
import Modal from '../components/dashboard/Modal';

const buttons = [
    { label: "Add Table", icon: <MdTableBar />, action: "table" },
    { label: "Add Category", icon: <MdCategory />, action: "category" },
    { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payment"]

function AdminDashBoard() {
    const[isTableModalOpen,setIsTableModalOpen] = useState(false)
    const [activeTab,setActiveTab] = useState("Metrics")
    
    const handleOpenModal =(action)=>{
        if(action ==="table") 
        setIsTableModalOpen(true)
    }
    return (
        <>
            <Header />
            <div className='bg-gray-950 min-h-[calc(100vh-5rem)]'>

                <div className='container mx-auto py-10 px-4 md:px-6'>
                    {/* BUTTON SECTION */}
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>

                        {/* Action Buttons */}
                        <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
                            {buttons.map(({ label, icon, action }, index) => (
                                <button onClick={()=>handleOpenModal(action)}
                                key={index}
                                    className='bg-neutral-800 hover:bg-gray-900 px-5 py-3 rounded-lg text-white font-semibold text-sm md:text-base flex items-center gap-2 transition w-full sm:w-auto justify-center' >
                                    {label} {icon}
                                </button>
                            ))}
                        </div>

                        {/* Tabs */}
                        <div className='flex flex-wrap gap-3 justify-center lg:justify-end'>
                            {tabs.map((tab, index) => (
                                <button onClick={()=>{setActiveTab(tab)}}  key={index}
                                    className={` px-5 py-3 rounded-lg text-white font-semibold text-sm 
                                        md:text-base transition w-full sm:w-auto ${activeTab===tab ? "bg-neutral-800 ":"bg-gray-900 hover:bg-neutral-800"}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
                {activeTab==="Metrics" && <Metrics/>}
                {/* {activeTab==="Orders" && <RecentOrdersDemo/>} */}
                {activeTab==="Orders" && <RecentOrders/>}
                
                {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen}/>}



            </div>
        </>
    )
}

export default AdminDashBoard