import {
  removeLineItem,
  removeCartItem,
  getCartItems,
  getCartLineItems
} from "../actions/cartAction";

import { getUser } from "../actions/userAction";

export const getCartForReturningUser = () => {
  return function thunk(dispatch) {
    return fetch(`http://localhost:3000/api/v1/curr_user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(getUser(data.user));
        dispatch(getCartItems(data.cart_items));
        dispatch(getCartLineItems(data.line_items));
      });
  };
};

export const deleteCartItem = lineItem => {
  return function thunk(dispatch) {
    return fetch(`http://localhost:3000/api/v1/line_items/${lineItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        line_item: {
          lineItem
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.books && data.line_items) {
          dispatch(removeCartItem(data.books));
          dispatch(removeLineItem(data.line_items));
        } else {
          dispatch(removeCartItem(null));
          dispatch(removeLineItem(null));
        }
      });
  };
};
