import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

//import books from "../data.js";
import { getBooks } from "../actions/bookAction";
import BookList from "../components/BookList";
import BookDetail from "../components/BookDetail";
import Cart from "../components/Cart";
import { getCartForReturningUser } from "../thunks/cartThunks";

class BookContainer extends Component {
  componentDidMount() {
    this.props.getBooks();
    this.props.getCartItemsForUser();
  }

  render() {
    const { books } = this.props;
    return (
      <div className="BookContainer">
        <Route
          exact
          path="/books"
          render={routerProps => <BookList books={books} />}
        />
        <Route
          path="/books/:rank"
          render={routerProps => {
            const rank = parseInt(routerProps.match.params.rank);

            if (books.length > 0) {
              const book = books.find(book => {
                return book.rank === rank;
              });
              return <BookDetail book={book} />;
            } else {
              return null;
            }
          }}
        />
        <Cart />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.book.books
  };
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  getCartItemsForUser: () => dispatch(getCartForReturningUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
