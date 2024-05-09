import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {id: 1, title:"bangla", author:"rajib"},
        {id: 2, title:"Accounting", author:"rajib"}
    ]

};
export const booksSlice = createSlice({
    name : "books",
    initialState : initialBooks,
    reducers : {
        showBooks : (state) => state,
        addBooks : (state,action) => {
            state.books.push(action.payload);
        },
        updateBooks : (state,action) => {
            const {id,title,author} = action.payload;
            const isBookexist = state.books.filter((book)=> book.id == id)
            if(isBookexist){
                isBookexist[0].title = title;
                isBookexist[0].author = author;
            }
        },
        deleteBooks : (state,action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
            
        }
    }
})

export const {showBooks,addBooks,deleteBooks,updateBooks} = booksSlice.actions;
export default booksSlice.reducer;