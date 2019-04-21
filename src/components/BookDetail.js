import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Card, Icon } from "semantic-ui-react";
import { Link, Switch, Route } from "react-router-dom";
import { addCartItem }  from '../actions/cartAction';

class BookDetail extends Component {

  handleClick = () => {
    return this.props.addCartItem(this.props.book)
  }


  render() {
    console.log(this.props.book)
   	return(
      <div>
        {this.props.book
        &&
        <Card>
          {/*<Card.Header size="large"> i am title (header)</Card.Header> */}
            <Card.Meta> {this.props.book.rank} </Card.Meta>
               <Card.Content>
               <img className = "image" alt="" src= {this.props.book.book_image} />
                <p> Description: {this.props.book.description}</p>
                <p> Author: {this.props.book.author}</p>
                <p> Publisher: {this.props.book.publisher} </p>
                <p> Price: ${this.props.book.price} </p>
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
