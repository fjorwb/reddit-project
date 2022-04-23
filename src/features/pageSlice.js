import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 'all',
    isLoading: true
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        Endpoint: (state, action) => {
            const txt = action.payload
            state.page = txt
        },
    }
})

export const {Endpoint} = pageSlice.actions


export default pageSlice.reducer
