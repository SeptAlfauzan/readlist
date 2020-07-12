import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form className="add-form" onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="type the book title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={author} placeholder="type the book author" onChange={(e) => setAuthor(e.target.value)}/>
            <button type="submit">add book</button>
        </form>
     );
}
 
export default BookForm;