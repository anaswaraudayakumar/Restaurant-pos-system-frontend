import apiService from "../api/apiService";

// api for user

//register 
 export const registerAPI = async(userData)=>{
    return await apiService("POST","/register",userData)
 }
 //login
  export const loginAPI = async(userData)=>{
    return await apiService("POST","/login",userData)
 }
//logout
 export const logoutAPI = async()=>{
   return await apiService("POST","logout")
 }

 //get single user details
  export const singleUserAPI = async(id)=>{
    return await apiService("GET",`/user/${id}`)
 }

 //order
 //addOrder
 export const addOrderAPI = async (orderDetails)=>{
    return await apiService("POST","/add-order",orderDetails)
 }
 //get all ordersz
 export const allOrdersAPI = async ()=>{
    return await apiService("GET","/all-order")
 }
 //get one order
  export const oneOrderAPI = async(id)=>{
    return await apiService("GET",`/one-order/${id}`)
 }

 //update order
 export const editOrderAPI = async (id,orderDetails)=>{
    return await apiService("PUT",`/one-order/${id}`,orderDetails)
 }

//  table 
//add table
export const addTableAPI =  async(reqBody)=>{
    return await apiService("POST","/add-table",reqBody)
}
//get all table
export const getAllTableAPI =  async()=>{
    return await apiService("GET","/all-table")
}
//update table
export const updateTableAPI =  async(id,reqBody)=>{
    return await apiService("PUT",`/edit-table/${id}`,reqBody)
}