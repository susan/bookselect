import { removeLineItem, removeCartItem } from "../actions/cartAction"

export const deleteCartItem = (lineItem) => {
  console.log(lineItem.id)
  return function thunk (dispatch) {
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
   .then(resp=> resp.json())
  .then(data => {
    dispatch(removeLineItem(data.id))
    dispatch(removeCartItem(data.book))
   })
  }
}
