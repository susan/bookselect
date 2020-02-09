import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import BookCard from "./BookCard";

class BookList extends Component {
  render() {
    const { books = [] } = this.props;
    const bookChoices = books.map(book => {
      return (
        //   <Grid.Column width={4}>
        <BookCard
          key={book.rank}
          book={book}
          getBookDetails={this.props.getBookDetails}
        />
        // </Grid.Column>
      );
    });

    return (
      <>
        <Grid>
          <Grid.Row>{bookChoices}</Grid.Row>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.book.books
  };
};

export default connect(mapStateToProps)(BookList);
