import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BookCard from "./BookCard";

class BookList extends Component {
  render() {
    const { books = [] } = this.props;
    const bookChoices = books.map(book => {
      return (
        <Grid.Column width={4}>
          <BookCard
            key={book.rank}
            book={book}
            getBookDetails={this.props.getBookDetails}
          />
        </Grid.Column>
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
export default BookList;
