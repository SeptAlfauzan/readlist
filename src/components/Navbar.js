import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return ( 
        <nav>
            <h2>Your reading list</h2>
            <h3>{books.length} to read</h3>
        </nav>
     );
}
 
export default Navbar;