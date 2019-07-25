import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

//import books from "../data.js";
import { getBooks } from "../actions/bookAction";
import BookList from "../components/BookList";
import BookDetail from "../components/BookDetail";
import Cart from "../components/Cart";

class BookContainer extends Component {

  componentDidMount(){
    this.props.getBooks()
  }

  render() {
    //console.log(this.props)
    //
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
           <Route exact path= "/books" render={(routerProps) => <BookList books={this.props.books}/> } />
           <Route path ="/books/:rank" render={(routerProps)=> {
             const rank= parseInt(routerProps.match.params.rank)
             //console.log(rank)

               if (this.props.books.length > 0) {
                 const book = this.props.books.find(book=> {
                  return book.rank === rank
                  })
                 return <BookDetail book={book}/>
                } else {
                  return null
               }
           }}
           />
           <Cart />
      </div>
    );
  }
}
  const mapStateToProps = (state) => {
     return {
        books: state.book.books,
     }
  }

  const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks())
  })

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
