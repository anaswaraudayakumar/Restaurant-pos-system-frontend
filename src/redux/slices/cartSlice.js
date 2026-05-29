import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existing = state.find(item => item.id === action.payload.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id != action.payload);
        },
         clearCart: () => []   
    }
})

export const getTotalPrice = (state) => state.cart.reduce((acc, cur) => acc + Number(cur.price) * Number(cur.quantity || 1), 0)
export const { addItem, removeItem,clearCart } = cartSlice.actions
export default cartSlice.reducer