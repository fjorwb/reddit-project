import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: '',
    idp: 1,
    data: [],
    search: '',
    isLoading: true
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        EndpointT: (state, action) => {
            const {text, id} = action.payload
            state.search = ''
            state.page = text.toLowerCase()
            state.idp = id
        },
        EndpointS: (state, action) => {
            const txt = action.payload
            state.search = txt

        },
        EndpointI: (state, action) => {
            const id = action.payload
            state.id = id
        }
    }
})

export const {EndpointT, EndpointI, EndpointS} = pageSlice.actions


export default pageSlice.reducer
