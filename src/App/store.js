import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/post/postSlice";
import booksReducer from "../Components/CurdComponents/Pages/BooksSlice";

const store = configureStore({
    reducer: {
        counter : counterReducer,
        posts : postReducer,
        booksReducer : booksReducer,
    }
})
export default store;