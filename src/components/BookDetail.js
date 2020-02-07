import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import { addCartItem }  from '../actions/cartAction';
import { createBook } from "../thunks/bookThunks";

class BookDetail extends Component {
  handleClick = () => {
    return this.props.createBook(this.props.book);
  };

  render() {
    const {
      book_image,
      title,
      description,
      author,
      publisher,
      price
    } = this.props.book;
    return (
      <div>
        {this.props.book && (
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={6}>
                <img className="image_large" alt="" src={book_image} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header size="large"> Title: {title}</Header>
                <p>
                  <a className="ui teal horizontal label">Description</a>
                  {description}
                </p>
                <p> Author: {author}</p>
                <p> Publisher: {publisher} </p>
                <p> Price: ${price} </p>
                {localStorage.getItem("token") ? (
                  <Icon
                    color="teal"
                    onClick={this.handleClick}
                    className="shopping cart icon"
                  />
                ) : (
                  <Link to="/login"> Login to Add to Cart </Link>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.book.selectedBook
  };
};

const mapDispatchToProps = dispatch => ({
  //addCartItem: (book) => dispatch(addCartItem(book))
  createBook: book => dispatch(createBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
