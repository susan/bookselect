import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Card } from "semantic-ui-react";
import { Link, Switch, Route } from "react-router-dom";


class BookDetail extends Component {



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
                <p>{this.props.selectedBook.description}</p>
                <p> {this.props.selectedBook.publisher} </p>
                <p> {this.props.selectedBook.price} </p>
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

export default connect(mapStateToProps)(BookDetail);
