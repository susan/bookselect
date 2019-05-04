const initialCartState = {
	carts: [],
  cartsLineItems: [],
}

export default function cartReducer(state = initialCartState, action){
   //console.log('%c cartReducer', 'color:pink', action)

   switch(action.type) {

   	 case "ADD_CART_ITEM":
   	   let newCartItem = action.payload
       let newArray= [...state.carts, newCartItem]
       return {...state, carts: newArray}

     case "REMOVE_CART_ITEM": {
       let book = action.payload
         return {...state, carts: state.carts.filter(bookObj =>
            bookObj.id !== book.id
         )}
      }

     case "GET_CART":
        return {...state, ...state.carts}

      case "CLEAR_CART":
        return{...state, carts: []}

      case "GET_CART_ITEMS":
        console.log(action.payload)
         return{...state, carts: action.payload}

      case "ADD_LINE_ITEM":
       let newLineItem = action.payload

       let newLineItemArray= [...state.cartsLineItems, newLineItem]
       return {...state, cartsLineItems: newLineItemArray}

      case "GET_CART_LINE_ITEMS":
        console.log(action.payload)
         return{...state, cartsLineItems: action.payload}

      case "REMOVE_LINE_ITEM": {
        let id = action.payload
           return {...state, cartsLineItems: state.cartsLineItems.filter(lineItem =>
             lineItem.id !== id
           )}
        }

     default:
      return state;
   }
}
