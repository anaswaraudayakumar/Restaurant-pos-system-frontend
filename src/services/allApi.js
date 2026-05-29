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
  export const singleUserAPI = async()=>{
    return await apiService("GET","/user/profile")
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
 export const updateOrderAPI = async (id,orderStatus)=>{
    return await apiService("PUT",`/one-order/${id}`,orderStatus)
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

//payment
export const createOrderAPI = async (reqBody) =>{
   return await apiService("POST","/create-order",reqBody)
}

export const verifyPaymentAPI = async (reqBody) => {
    return await apiService("POST","/verify-payment",reqBody )
}