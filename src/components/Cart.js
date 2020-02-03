import React, { Component } from 'react';
import { List, Header, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteCartItem } from "../thunks/cartThunks"



class Cart extends Component {

   // handleDelete = (event,id) => {
   //  console.log(id)
   //   return this.props.deleteCartItem(id)
   //}console.log("props are", this.props)
	render() {

    const cartItems = this.props.carts.map((item, index)=> {

      return <List.Item  key={index}>
            Title: {item.title} price: ${item.price} <Icon color='yellow'
            name='trash alternate outline'
            onClick={() =>{
              let selectLineItem = this.props.lineItems.find(selection => {
               return selection.book_id === item.id
              })
              console.log('selected', selectLineItem)
               this.props.deleteCartItem(selectLineItem)}
             }
            />
        </List.Item>


    })


		return (
     <div>
     <a className="ui purple label" >Cart</a>
       <Header size="medium"> Cart Items</Header>
         <List size = {'large'}>
          {cartItems ? cartItems : null}
         </List>

       </div>
		 )

	}
};

const mapStateToProps = (state) => {
     return {
        carts: state.cart.carts,
        lineItems: state.cart.cartsLineItems,
        user: state.user.user,
     }
  }

  const mapDispatchToProps = (dispatch) => ({
    deleteCartItem: (book) => dispatch(deleteCartItem(book))
})


	export default connect(mapStateToProps, mapDispatchToProps)(Cart);
