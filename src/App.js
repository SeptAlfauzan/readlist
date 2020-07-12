import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import BookForm from './components/BookForm';
function App() {
  return (
    <div className="container">
      <BookContextProvider>
        <Navbar/>
        <BooksList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
