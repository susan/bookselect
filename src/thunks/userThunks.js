import { addUser, getUser } from "../actions/userAction";
import { getCartItems, getCart, getCartLineItems } from "../actions/cartAction";

export const createUser = user => {
  return function thunk(dispatch) {
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: user.newUserEmail,
          password: user.newUserPassword
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(addUser(data));
        dispatch(getCart(data.carts));
        localStorage.setItem("token", data.jwt);
      });
  };
};

export const loginUser = user => {
  return function thunk(dispatch) {
    return fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: user.loginEmail,
          password: user.loginPassword
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(getUser(data.user));
        dispatch(getCartLineItems(data.line_items));
        dispatch(getCartItems(data.cart_items));
        if (!data.message) {
          localStorage.setItem("token", data.jwt);
        }
      });
  };
};
