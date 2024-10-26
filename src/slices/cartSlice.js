import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0
}


const cartSlice = createSlice({
    name : "cart",
    initialState : initialState, 
    reducers : {
        setTotalItems(state, value){
            state.totalItems = value.payload
        }

        // add to cart, remove the cart, reset cart --> add toast too with the function
    }
})

export const {setTotalItems} = cartSlice.actions;
export default cartSlice.reducer;
