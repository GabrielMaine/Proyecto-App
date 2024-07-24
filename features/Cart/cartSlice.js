import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: {
            user: 'userLogged',
            updatedAt: Date.now().toLocaleString(),
            total: null,
            items: []
        }
    },
    reducers: {
        addItem: (state, action) => {
            const repeteatedProduct = state.value.items.find(
                (item)=>item.slug === action.payload.slug
            );
            
            if(repeteatedProduct){
                const updatedItems = state.value.items.map((item)=>{
                    if (item.slug===action.payload.slug){
                        item.quantity+=action.payload.quantity
                        return item
                    }
                    return item
                });
                const total = updatedItems.reduce(
                    (acc, currentItem) => (acc += currentItem.price*currentItem.quantity), 0
                );
                state.value = {
                    ...state.value,
                    items: updatedItems,
                    total: total,
                    updatedAt: new Date().toLocaleString()
                };
            }else{
                state.value.items.push(action.payload)
                const total = state.value.items.reduce(
                    (acc, currentItem) => (acc += currentItem.price*currentItem.quantity), 0
                );
                state.value = {
                    ...state.value,
                    total: total,
                    updatedAt: new Date().toLocaleString()
                };      
            };
        },
        removeItem: (state, action) => {
            const updatedItems = state.value.items.filter(
                (item) => item.slug !== action.payload.slug
            );
            const total = updatedItems.reduce(
                (acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0
            );
            state.value = {
                ...state.value,
                items: updatedItems,
                total: total,
                updatedAt: new Date().toLocaleString()
            };
        },

        clearCart: (state, action) => {
            state.value = {
                ...state.value,
                items: [],
                total: null,
                updatedAt: new Date().toLocaleString()
            }
            console.log(state.items)
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer