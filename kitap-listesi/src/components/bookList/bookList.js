import React, { Component } from 'react';
import { connect } from 'react-redux';//reducerı ve aksiyonları bağlamamız için gerekli
import BookItem from './bookItem';
class BooksList extends Component {
    /* componentDidMount(){
        this.props.addBook({
            
            title:'Harry Potter 1',
            subtitle:"harry",
            description : "sdfsadfgsd sdfg sdfg sdfg sd fg sdfggggggggggg ",
            pages:545,
            author:"J.K Rowling"
        })
    } */
    render() {
        const { bookList } = this.props;
        return (
            <div className="book-list-container ui cards">
                {
                    bookList.map(book=>(
                       <BookItem key={book.isbn} book={book} /> 
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}
export default connect(mapStateToProps)(BooksList);