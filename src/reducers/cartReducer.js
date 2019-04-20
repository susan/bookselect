const initialCartState = {
	initialCartState: [],
}

export default function cartReducer(state = initialCartState, action){
   console.log('%c cartReducer', 'color:pink', action)

   switch(action.type) {

     default:
      return state;
   }
}
