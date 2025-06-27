

import { createSlice } from "@reduxjs/toolkit";
//example of react reducers
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload)
        },  
        removeItem:(state)=>{
            state.item.pop()
        },
        removeCart:(state)=>{
            state.item.length=0
        }
    }
})

export const {addItem,removeItem,removeCart} = cartSlice.actions;

export default cartSlice.reducer;