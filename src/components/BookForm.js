import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {addNewBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNewBook(title, author);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="type the book title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="type the book author" onChange={(e) => setAuthor(e.target.value)}/>
            <button type="submit">add book</button>
        </form>
     );
}
 
export default BookForm;