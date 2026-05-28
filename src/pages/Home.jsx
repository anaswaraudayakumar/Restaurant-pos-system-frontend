import React, { useEffect, useState } from 'react'
import BottomNavbar from '../components/common/BottomNavbar'
import { FaMoneyBill } from 'react-icons/fa';
import MiniCard from '../components/home/MiniCard';
import { GrInProgress } from 'react-icons/gr';
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';
import Header from '../components/common/Header';
import { useSelector} from 'react-redux'


const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function Home() {
  const userDetails = useSelector(state=>state.user)
  const [dateAndTime,setDateAndTime] = useState(new Date())
  
  useEffect (()=>{
    const timer = setInterval(() => setDateAndTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const month = MONTHS[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  };
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
    <Header/>
      <section  className=' bg-gray-950 overflow-hidden gap-3  flex'>
        
        {/* left side */}
        <div className=' flex-3 bg-neutral-900/50  ' >
         <div className='md:flex justify-between items-center px-8 mt-5 '>
          {/* greetings */}
          <div >
            <h1 className='text-white  text-xl md:text-2xl font-semibold tracking-wide '>have a greate Day, {userDetails.name} </h1>
            <p className='text-gray-100 text-sm'>Give Your Best Service for customers ✨</p>
          </div>
          {/* date and time */}
          <div className=''>
            <h1 className='text-2xl text-white'>{formatTime(dateAndTime)}</h1>
            <p className='text-sm text-gray-500'>{formatDate(dateAndTime)}</p>
          </div>
         </div>
         <div className='flex items-center w-full  gap-3 px-8 mt-8'>
          <MiniCard title="Total Earnings" icon={<FaMoneyBill/>} number={512}  footNumber={1.6} />
          <MiniCard title="In Progresss" icon={<GrInProgress/>} number={16}  footNumber={3.6} />
  
         <div >
  
         </div>
         </div>
         <div className=' '><RecentOrders/></div>
        </div>
        {/* right side  */}
        <div className='flex-2 bg-neutral-950/50' >
        <PopularDishes/>
        </div> 
        <BottomNavbar/>
      </section>
    </>
    
  )
}

export default Home