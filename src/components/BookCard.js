import React, { Component } from 'react'
import { Card } from "semantic-ui-react";




class BookCard extends Component {

  render() {
       const { rank, book_image } = this.props.book
  	return (
      <>
      <Card>
        <Card.Content>
          <Card.Header> <img className = "image" alt="" src={book_image} /> </Card.Header>
            <Card.Meta> Rank: {rank} </Card.Meta>
               <Card.Description> </Card.Description>
          </Card.Content>
        </Card>
      </>


    )
  }
}
export default BookCard;
