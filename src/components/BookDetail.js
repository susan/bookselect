import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Grid, Icon, Header } from "semantic-ui-react";
import { Link, Switch, Route } from "react-router-dom";
import { addCartItem }  from '../actions/cartAction';

class BookDetail extends Component {

  handleClick = () => {
    return this.props.addCartItem(this.props.book)
  }


  render() {
    //console.log(this.props.book)
   	return(
      <div>
        {this.props.book
        &&
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={6}>
              <img className = "image_large" alt="" src= {this.props.book.book_image} />
             </Grid.Column>
             <Grid.Column width={6}>
               <Header size="large"> Title: {this.props.book.title}</Header>
                <p> <a className="ui teal horizontal label">Description</a>: {this.props.book.description}</p>
                <p> Author: {this.props.book.author}</p>
                <p> Publisher: {this.props.book.publisher} </p>
                <p> Price: ${this.props.book.price} </p>
                <Icon color="teal" onClick={this.handleClick} name= "shopping cart" />
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
