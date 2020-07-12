import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail'
const BooksList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div>
            <ul>
                {books.map(book => {
                    return (<BookDetail book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div style={{textAlign: "center"}}>
            enjoy ur free time
        </div>
        );
}

export default BooksList;