
const initialUserState = {
   user: {},
}

export default function userReducer(state = initialUserState, action) {
  console.log('%c userReducer', 'color:blue', action)
  switch(action.type) {
    case "ADD_USER":
    	console.log(action.payload)
    	return { ...state, user: action.payload};

    default:
      return state;
  }
}
