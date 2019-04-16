import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';

import { selectBook }  from '../actions/bookAction';



class BookCard extends Component {

  handleClick = () => {
     return this.props.getBookDetails(this.props.selectedBook(this.props.book))
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

const mapDispatchToProps = (dispatch) => ({
        selectedBook: (book) => dispatch(selectBook(book))
     })


export default connect(null, mapDispatchToProps)(BookCard);
