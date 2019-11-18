import React from 'react';
import BookList from './bookList/bookList';
import './app.css';
import BookDetail from './bookDetail/bookDetail';
const App = () =>{
    return (
        <div className='app-container'>
           <BookList />
           <BookDetail />
        </div>

)};
export default App;