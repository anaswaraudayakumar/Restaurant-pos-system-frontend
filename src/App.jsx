import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Header from './components/common/Header'
import Tables from './pages/Tables'
import Menu from './pages/Menu'

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/auth' element={<Auth/>} />
    <Route path='/orders' element={<Orders/>} />
    <Route path='/tables' element={<Tables/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='*' element={<div>Not Found</div>} />




   </Routes>
   </>
  )
}

export default App