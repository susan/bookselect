import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Card } from "semantic-ui-react";



class BookDetail extends Component {
  render() {

  	return(
      <div>
      {this.props.selectedBook
      &&
      (
      <Card>
          {/*<Card.Header size="large"> i am title (header)</Card.Header> */}
            <Card.Meta> {this.props.selectedBook.rank} </Card.Meta>
               <Card.Content>
               <img className = "image" alt="" src= "https://s1.nyt.com/du/books/images/9781524763138.jpg" />
                <p>i am description</p>
                <p> i am publisher </p>
                <p> i am price </p>
               </Card.Content>
          </Card>)
      }
      </div>
     );
   }
  };

const mapStateToProps = (state) => {
     return {
        selectedBook: state.book.selectedBook,
     }
  }

export default connect(mapStateToProps)(BookDetail);
