import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        value:{
            user: null,
            token: null,
            localId: null,
            imageCamera: null
        },
    },
    reducers:{
        setUser: (state, action) => {
            state.value = {
                user: action.payload.data.email,
                token: action.payload.data.idToken,
                localId: action.payload.data.localId,
            };
        },
        clearUser: (state) => {
            state.value.user = null
            state.value.token = null
        },
        setCameraImage: (state, action) => {
            state.value.imageCamera = action.payload
        }
    }
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer