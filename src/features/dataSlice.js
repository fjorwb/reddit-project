import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data : []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducer: {
        Data: (state, action) => {
            const dat = action.payload
            state.data = dat
        }
    }
})

export const {Data} = dataSlice.actions

export default dataSlice.reducer