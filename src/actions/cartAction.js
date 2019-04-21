export const addCartItem = (book) => {
	return {
		type: "ADD_CART_ITEM",
    payload: book
	}
}


export const clearCart = (carts) => {
	return {
		type: "CLEAR_CART",
    payload: carts
	}
}

export const getCartItems = (itemArray) => {
   return {
   type: "GET_CART_ITEMS",
   payload: itemArray
   }
}
