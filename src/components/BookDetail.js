import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetail = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return (  
        <li className="book-detail" onClick={() => dispatch({type:'REMOVE_BOOK', id: book.id})}>
        <div>{book.title}</div>
        <small>{book.author}</small>
        </li>
    );
}
 
export default BookDetail;