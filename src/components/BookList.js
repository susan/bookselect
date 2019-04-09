import React, { Component } from 'react'
import BookCard from "./BookCard"



class BookList extends Component {

  render() {
  	console.log(this.props)
    const bookChoices = this.props.books.map(book => {
    	return <BookCard key ={book.rank} book={book} />
    })

  	return(
  		<>
  		{bookChoices}
  		</>
  	)

  }
}
export default BookList;
