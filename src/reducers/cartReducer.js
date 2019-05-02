const initialCartState = {
	carts: [],
}

export default function cartReducer(state = initialCartState, action){
   //console.log('%c cartReducer', 'color:pink', action)

   switch(action.type) {

   	 case "ADD_CART_ITEM":
   	   let newCartItem = action.payload
       let newArray= [...state.carts, newCartItem]
       return {...state, carts: newArray}

     case "GET_CART":
        return {...state, ...state.carts}

      case "CLEAR_CART":
        return{...state, carts: []}

      case "GET_CART_ITEMS":
        console.log(action.payload)
         return{...state, carts: action.payload}

     default:
      return state;
   }
}
