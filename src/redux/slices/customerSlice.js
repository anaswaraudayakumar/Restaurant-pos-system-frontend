import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId:"",
    customerName:"",
    customerPhone:"",
    guests:0,
    tableNo:"",
    tableId: "" 
}

const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        setCustomer:(state,action) =>{
            const {name,phone,guests} = action.payload
            state.orderId =`${Date.now()}`
            state.customerName= name
            state.customerPhone=phone
            state.guests=guests
            
        },
        removeCustomer:(state,action)=>{
            state.customerName=""
             state.customerPhone=""
            state.guests=0
            state.tableNo=""
            state.tableId = ""
       
    },
    updateTable:(state,action)=>{
        state.tableNo = action.payload.tableNo
        state.tableId = action.payload.tableId 
    }
}
})
export const {setCustomer,removeCustomer,updateTable}= customerSlice.actions
export default customerSlice.reducer