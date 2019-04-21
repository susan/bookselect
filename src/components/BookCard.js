import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import { selectBook }  from '../actions/bookAction';
import { getPriceFromGoogle }  from '../thunks/bookThunks';


class BookCard extends Component {

  // handleClick = () => {
  //    this.props.selectedBook(this.props.book)
  //    this.props.bookPrice(this.props.book)
  // }

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
             <Route render={({history}) => (
             <Icon color="green" onClick = {() => {
               return (
                <div>
                  { history.push(`books/${this.props.book.rank}`) }
                    this.props.selectedBook(this.props.book)
                    this.props.bookPrice(this.props.book)
                 </div>
                )
             }}
             name="info"/>
            )} />
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
