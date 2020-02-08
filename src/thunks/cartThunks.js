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
      method: "DELETE",
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
        dispatch(removeLineItem(data.id));
        dispatch(removeCartItem(data.book_id));
      });
  };
};
