import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Cart extends Component {

	render() {
    const cartItems = this.props.carts.map((item, index)=> {
     return <li key={index}>{item.title} price: ${item.price}</li>
    })
		return (
     <div>
       <Header size="medium"> Cart </Header>
         <ul>
           {cartItems}
         </ul>
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
