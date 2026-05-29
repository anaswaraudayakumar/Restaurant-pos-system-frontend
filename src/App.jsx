import React from 'react'
import { Navigate, Route, Routes, } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from './pages/Home'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Header from './components/common/Header'
import Tables from './pages/Tables'
import Menu from './pages/Menu'
import Pnf from './pages/Pnf'
import { useSelector } from 'react-redux'
import useLoadData from './hooks/useDataLoad'
import Loader from './components/common/Loader'
import AdminDashBoard from './pages/AdminDashBoard'
import ChefPage from './pages/ChefPage'

function ProtectRoutes({children}){
  const {isAuth} = useSelector(state=>state.user)
  if(!isAuth){
    return <Navigate to="/auth"/>
  }
  return children
}

function App() {
   
  const {isAuth} = useSelector(state=>state.user)
  const isLoading=useLoadData()
  if(isLoading) return <Loader/>

  return (
   <>
    
   <Routes>
    <Route path='/' element={
      <ProtectRoutes>
        <Home/>
        </ProtectRoutes>
      } />
    <Route path='/auth' element={isAuth? <Navigate to='/'/>:<Auth/>} />
    <Route path='/orders' element={
      <ProtectRoutes>
        <Orders/>
        </ProtectRoutes>
      } />
    <Route path='/tables' element={
      <ProtectRoutes>
        <Tables/>
      </ProtectRoutes>
      } />
    <Route path='/menu' element={
     <ProtectRoutes> <Menu/></ProtectRoutes>
      } />
       <Route path='/dashboard' element={
     <ProtectRoutes> <AdminDashBoard/></ProtectRoutes>
      } />
       <Route path='/chef' element={
     <ProtectRoutes> <ChefPage/></ProtectRoutes>
      } />
    <Route path='*' element={
      <ProtectRoutes><Pnf/></ProtectRoutes>
      } />




   </Routes>
    <ToastContainer />
   </>
  )
}


export default App