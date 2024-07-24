import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/Counter/counterSlice'
import shopReducer from '../features/Shop/shopSlice'
import cartReducer from '../features/Cart/cartSlice'
import { shopApi } from '../Services/shopService'
import { authApi } from '../Services/authService'
import authReducer from '../features/Auth/AuthSlice'

const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
        .concat(shopApi.middleware)
        .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store