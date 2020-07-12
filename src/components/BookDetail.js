import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetail = ({book}) => {
    const {removeBook} = useContext(BookContext);

    return (  
        <li onClick={() => removeBook(book.id)}>
        <div>{book.title}</div>
        <small>{book.author}</small>
        </li>
    );
}
 
export default BookDetail;