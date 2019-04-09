import React, { Component, Fragment} from 'react'
import { Card } from "semantic-ui-react";



const BookDetail = ({ Title, Description }) => {
  	return(
      <>
      <Card>

          {/*<Card.Header size="large"> i am title (header)</Card.Header> */}
            <Card.Meta> i am rank (Meta) </Card.Meta>
               <Card.Content>
               <img className = "image" alt="" src= "https://s1.nyt.com/du/books/images/9781524763138.jpg" />
                <p>i am description</p>
                <p> i am publisher </p>
               </Card.Content>
          </Card>
      </>
     )
  };

export default BookDetail;
