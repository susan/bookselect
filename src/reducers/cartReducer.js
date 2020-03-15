const initialCartState = {
  carts: [],
  cartsLineItems: []
};

export default function cartReducer(state = initialCartState, action) {
  //console.log('%c cartReducer', 'color:pink', action)

  switch (action.type) {
    case "ADD_CART_ITEM": {
      const foundItem = state.carts.find(item => item.id === action.payload.id);
      if (foundItem !== undefined) {
        return { ...state, carts: state.carts };
      }
      return { ...state, carts: [...state.carts, action.payload] };
    }

    case "REMOVE_CART_ITEM": {
      const foundItem = state.carts.find(item => item.id === action.payload.id);
      const newCartsArr = state.carts.filter(item => {
        return item.id !== foundItem.id;
      });
      return { ...state, carts: newCartsArr };
    }

    case "GET_CART":
      return { ...state, carts: state.carts };

    case "CLEAR_CART":
      return { ...state, carts: [] };

    case "GET_CART_ITEMS":
      return { ...state, carts: action.payload };

    case "ADD_LINE_ITEM": {
      const foundItem = state.cartsLineItems.find(
        item => item.id === action.payload.id
      );
      if (foundItem !== undefined) {
        const newLineItemsArr = state.cartsLineItems.map(item => {
          return item.id === foundItem.id
            ? { ...item, quantity: action.payload.quantity }
            : item;
        });
        return { ...state, cartsLineItems: newLineItemsArr };
      }
      return {
        ...state,
        cartsLineItems: [...state.cartsLineItems, action.payload]
      };
    }

    case "GET_CART_LINE_ITEMS":
      return { ...state, cartsLineItems: action.payload };

    case "UPDATE_LINE_ITEM": {
      const foundItem = state.cartsLineItems.find(
        item => item.id === action.payload.id
      );
      const newLineItemsArr = state.cartsLineItems.map(item => {
        return item.id === foundItem.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });
      return { ...state, cartsLineItems: newLineItemsArr };
    }

    case "REMOVE_LINE_ITEM": {
      const foundItem = state.cartsLineItems.find(
        item => item.id === action.payload.id
      );
      const newLineItemsArr = state.cartsLineItems.filter(item => {
        return item.id !== foundItem.id;
      });
      return { ...state, cartsLineItems: newLineItemsArr };
    }

    default:
      return state;
  }
}
