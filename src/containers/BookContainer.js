import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';


import books from "../data.js"
import BookList from "../components/BookList"
import BookDetail from "../components/BookDetail"

class BookContainer extends Component {

   getBookDetails = (bookObj) =>{
     console.log(bookObj)

   }

  render() {
  	console.log(this.props.books)
    const { books } = this.props
    return (
      <div className="BookContainer">
      {/*<Grid>
       <Grid.Row width={8}>
            <BookList books={books}/>
            </Grid.Row>
            <Grid.Row width={4}>
            <BookDetail books={books}/>
            </Grid.Row>
            </Grid>
         */}
           <BookList books={books} getBookDetails={this.getBookDetails} />
           <BookDetail books={books} />
      </div>
    );
  }
}
  const mapStateToProps = (state) => {
     return {
        books: state.book.books,
     }
  }

export default connect(mapStateToProps)(BookContainer);
