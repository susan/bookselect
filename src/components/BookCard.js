import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Label, GridColumn } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { selectBook } from "../actions/bookAction";
import { getPriceFromGoogle } from "../thunks/bookThunks";

class BookCard extends Component {
  render() {
    const {
      book,
      selectedBook,
      bookPrice,
      book: { rank, book_image }
    } = this.props;
    return (
      <GridColumn width={4}>
        <div>
          <Card>
            <Card.Content>
              <Card.Header>
                <img className="image" alt="" src={book_image} />
              </Card.Header>
              <Card.Meta> Rank: {rank} </Card.Meta>
              <Card.Description> </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Route
                render={({ history }) => (
                  <Label
                    circular
                    color="blue"
                    key="white"
                    onClick={() => {
                      return (
                        <div>
                          {selectedBook(book)}
                          {bookPrice(book)}
                          {history.push(`books/${rank}`)}
                        </div>
                      );
                    }}
                  >
                    Details
                  </Label>
                )}
              />
            </Card.Content>
          </Card>
        </div>
      </GridColumn>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedBook: book => dispatch(selectBook(book)),
    bookPrice: book => dispatch(getPriceFromGoogle(book))
  };
};

export default connect(null, mapDispatchToProps)(BookCard);
