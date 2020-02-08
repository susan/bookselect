import React, { Component } from "react";
import { List, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteCartItem } from "../thunks/cartThunks";

class Cart extends Component {
  render() {
    const { lineItems, carts } = this.props;
    const cartItems = carts.map((item, index) => {
      return (
        <List.Item key={index}>
          {item.title} price: ${item.price} quantity:
          {lineItems[index].quantity}
          {/* <Icon
            color="yellow"
            className="trash alternate outline"
            onClick={() => {
              let selectLineItem = lineItems.find(selection => {
                return selection.book_id === item.id;
              });
              this.props.deleteCartItem(selectLineItem);
            }}
          /> */}
        </List.Item>
      );
    });
    return (
      <div>
        <a className="ui purple label">Cart</a>
        <Header size="medium"> Cart Items</Header>
        <List size={"large"}>{cartItems.length ? cartItems : null}</List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.cart.carts,
    lineItems: state.cart.cartsLineItems,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => ({
  deleteCartItem: selectLineItem => dispatch(deleteCartItem(selectLineItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
