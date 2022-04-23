import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    page: 'hot',
    isLoading: true
}

const redditSlice = createSlice({
    name: 'page',
    initialState
})

console.log(redditSlice)

export default redditSlice.reducer