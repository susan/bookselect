import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Card, Icon, Grid, Header } from "semantic-ui-react";
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
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
             <Grid.Column width={2}>
               <img className = "image" alt="" src= {this.props.selectedBook.book_image} />
             </Grid.Column>
             <Grid.Column width={4}>
                <Header size="large"> {this.props.selectedBook.title} </Header>
                <p> Description: {this.props.selectedBook.description}</p>
                <p> Author: {this.props.selectedBook.author}</p>
                <p> Publisher: {this.props.selectedBook.publisher} </p>
                <p> Price: ${this.props.selectedBook.price} </p>
                <Icon color="purple" onClick={this.handleClick} name= "shopping basket" />
               </Grid.Column>
            </Grid.Row>
          </Grid>
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
