import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';

import { selectBook }  from '../actions/bookAction';
import { getPriceFromGoogle }  from '../thunks/bookThunks';


class BookCard extends Component {

  handleClick = () => {
     this.props.selectedBook(this.props.book)
     this.props.bookPrice(this.props.book)
  }

  render() {
       const { rank, book_image } = this.props.book
  	return (
      <div>
      <Card>
        <Card.Content>
          <Card.Header> <img className = "image" alt="" src={book_image} /> </Card.Header>
            <Card.Meta> Rank: {rank} </Card.Meta>
               <Card.Description> </Card.Description>
          </Card.Content>
          <Card.Content extra >
             <Icon color="green" onClick = {this.handleClick} name="info"/>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedBook: (book) => dispatch(selectBook(book)),
    bookPrice: (book) => dispatch(getPriceFromGoogle(book))
  }
}


export default connect(null, mapDispatchToProps)(BookCard);
