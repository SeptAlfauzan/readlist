import React, { useState, createContext } from 'react';
import uuid from 'uuid/dist/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        {title: 'Sapiens', author: 'Septa Alfauzan', id:1}
    ]);
    const addNewBook = (title, author) => {
        setBook([...books, {title: title, author: author, id: uuid()}])
    };
    const removeBook = (id) => {
        setBook(books.filter(book => book.id !== id))
    };
    return ( 
        <BookContext.Provider value={{books, addNewBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;