import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Card, Icon } from "semantic-ui-react";
import { Link, Switch, Route } from "react-router-dom";
import { addCartItem }  from '../actions/cartAction';

class BookDetail extends Component {

  handleClick = () => {
    return this.props.addCartItem(this.props.selectedBook)
  }


  render() {
   	return(
      <div>
        {this.props.selectedBook
        &&
        <Card>
          {/*<Card.Header size="large"> i am title (header)</Card.Header> */}
            <Card.Meta> {this.props.selectedBook.rank} </Card.Meta>
               <Card.Content>
               <img className = "image" alt="" src= {this.props.selectedBook.book_image} />
                <p> Description: {this.props.selectedBook.description}</p>
                <p> Author: {this.props.selectedBook.author}</p>
                <p> Publisher: {this.props.selectedBook.publisher} </p>
                <p> Price: ${this.props.selectedBook.price} </p>
                <Icon onClick={this.handleClick} name= "shopping basket" />
               </Card.Content>
          </Card>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
     return {
        selectedBook: state.book.selectedBook,
     }
  }

const mapDispatchToProps = (dispatch) => ({
        addCartItem: (book) => dispatch(addCartItem(book))
     })

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
