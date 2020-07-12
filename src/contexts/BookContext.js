import React, { useState, createContext, useReducer } from 'react';
import uuid from 'uuid/dist/v1';
import { BooksReducer } from '../reducers/BooksReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BooksReducer, [
            {title: 'Sapiens', author: 'Septa Alfauzan', id:1}
        ])
    // const [books, setBook] = useState([
    //     {title: 'Sapiens', author: 'Septa Alfauzan', id:1}
    // ]);
    // const addNewBook = (title, author) => {
    //     setBook([...books, {title: title, author: author, id: uuid()}])
    // };
    // const removeBook = (id) => {
    //     setBook(books.filter(book => book.id !== id))
    // };
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;