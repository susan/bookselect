const initialCartState = {
  carts: [],
  cartsLineItems: []
};

export default function cartReducer(state = initialCartState, action) {
  //console.log('%c cartReducer', 'color:pink', action)

  switch (action.type) {
    case "ADD_CART_ITEM":
      let newCartItem = action.payload;
      const existingCartItem = state.carts.find(
        item => item.id === newCartItem.id
      );
      if (existingCartItem) {
        return { ...state, ...state.carts };
      } else {
        let newArray = [...(state.carts || []), newCartItem];
        return { ...state, carts: newArray };
      }
    case "REMOVE_CART_ITEM": {
      let bookId = action.payload;
      let foundIndex = state.carts.findIndex(i => i.id === bookId);
      let newArray = [
        ...state.carts.slice(0, foundIndex),
        ...state.carts.slice(foundIndex + 1)
      ];
      return { ...state, carts: newArray };
    }

    case "GET_CART":
      return { ...state, ...state.carts };

    case "CLEAR_CART":
      return { ...state, carts: [] };

    case "GET_CART_ITEMS":
      return { ...state, carts: action.payload };

    case "ADD_LINE_ITEM":
      let newLineItem = action.payload;
      const existingLineItem = state.cartsLineItems.find(
        item => item.id === newLineItem.id
      );
      if (existingLineItem) {
        return { ...state, ...state.cartsLineItems };
      } else {
        let newLineItemArray = [...(state.cartsLineItems || []), newLineItem];
        return { ...state, cartsLineItems: newLineItemArray };
      }
    case "GET_CART_LINE_ITEMS":
      return { ...state, cartsLineItems: action.payload };

    case "REMOVE_LINE_ITEM": {
      let id = action.payload;
      return {
        ...state,
        cartsLineItems: state.cartsLineItems.filter(
          lineItem => lineItem.id !== id
        )
      };
    }

    default:
      return state;
  }
}
