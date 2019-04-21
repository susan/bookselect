import React, { Component } from 'react';
import { List, Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Cart extends Component {

	render() {
    const cartItems = this.props.carts.map((item, index)=> {
     return <List.Item  key={index}> <Icon name='book' />Title: {item.title} price: ${item.price}</List.Item>
    })
		return (
     <div>
     <a class="ui purple label" >Cart</a>
       <Header size="medium"> Cart Items</Header>
         <List size = {'large'}>
           {cartItems}
         </List>
       </div>
		)
	}
};

const mapStateToProps = (state) => {
     return {
        carts: state.cart.carts,
     }
  }


	export default connect(mapStateToProps)(Cart);
