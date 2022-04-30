import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ''
}

const searchBarSlice = createSlice({
    name: 'search',
    initialState,
    reducer: {
            EndX: (state, {payload}) => {
            const tt = payload
            state.search = tt
            console.log(state.search)
        },
    }
})

export const {EndX} = searchBarSlice.actions

export default searchBarSlice.reducer