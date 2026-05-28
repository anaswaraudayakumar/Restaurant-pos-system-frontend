import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from './pages/Home'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Header from './components/common/Header'
import Tables from './pages/Tables'
import Menu from './pages/Menu'
import Pnf from './pages/Pnf'

function App() {

  
  return (
   <>
    
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/auth' element={<Auth/>} />
    <Route path='/orders' element={<Orders/>} />
    <Route path='/tables' element={<Tables/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='*' element={<Pnf/>} />




   </Routes>
    <ToastContainer />
   </>
  )
}

export default App