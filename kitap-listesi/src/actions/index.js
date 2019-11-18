export const addBook=({isbn,title,subtitle,description,author,pages})=>{
    return{//Aksiton objesi
      type:'ADD_BOOK',
      payload:{
        isbn,title,subtitle,
        description, author,pages
      }
    }
  }
  
  //Kitap Silme
 export const deleteBook=(book)=>{
    return{
      type:'DELETE_BOOK',
      payload:book
    }
  }
  
  //Kitap Seçme
 export const selectBook=(book) =>{
    return{
      type:'SELECT_BOOK',
      payload:book
    }
  }
  
  //Kitap Seçmeme
  export const deselectBook =() =>{
    return{
      type:'DESELECT_BOOK',
    }
  }

  
  
  