import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Cart extends Component {

	render() {
    const cartItems = this.props.carts.map((item, index)=> {
     return <List.Item key={index}>{item.title} price: `${item.price}`</List.Item>
    })
		return (
     <div>
       <Header size="medium"> Cart </Header>
         <List>
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
