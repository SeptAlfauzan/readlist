import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return books.length?( 
        <nav>
            <h2>Your reading list</h2>
            <h3>{books.length} book to read</h3>
        </nav>
     ):(
        <nav>
            <h2>Your reading list</h2>
            <h3>add new readlist</h3>
        </nav>
     )
     ;
}
 
export default Navbar;