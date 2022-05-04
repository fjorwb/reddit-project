import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './features/pageSlice'
import searchReducer from './features/searchBarSlice'

export const store = configureStore({
    reducer: {
        page: pageReducer,
        search: searchReducer,
    }
})

