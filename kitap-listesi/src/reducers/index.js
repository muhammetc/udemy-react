import {combineReducers} from 'redux';
import books from './books.json'; 

const bookListReducer=(oldBookList=books,action)=>{
    if(action.type==='ADD_BOOK'){
      //Kitap listesine ekleme
      return [...oldBookList, action.payload];
    } else if(action.type==='DELETE_BOOK'){
        //Kitap listesinden çıkar
      return oldBookList.filter(oldBook => oldBook.title!== action.payload.title);
      }
    return oldBookList;
    
  }
  
  const selectedBookReducer=(oldSelectedBook = {}, action)=>{
    if(action.type==='SELECT_BOOK'){
        //kitsp seçme işlemini yap
        return action.payload;
      } else if(action.type==='DESELECT_BOOK'){
        //Kitap seçimini kaldır.
        return {};
      } else if(action.type==='DELETE_BOOK'){
        /* if(oldSelectedBook.isbn===action.payload.isbn){
          return {}
        } else {
          return oldSelectedBook
        } */

        return oldSelectedBook.isbn === action.payload.isbn ? {} : oldSelectedBook;
      }
    return oldSelectedBook;
  }


  export default combineReducers({
    bookList:bookListReducer,
    selectedBook:selectedBookReducer
  });