const initialCartState = {
	carts: [],
}

export default function cartReducer(state = initialCartState, action){
   console.log('%c cartReducer', 'color:pink', action)

   switch(action.type) {

   	 case "ADD_CART_ITEM":
   	   let newCartItem = action.payload
       let newArray= [...state.carts, newCartItem]
       return {...state, carts: newArray}

     default:
      return state;
   }
}
