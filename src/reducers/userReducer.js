const initialUserState = {
  user: null
};

export default function userReducer(state = initialUserState, action) {
  //console.log('%c userReducer', 'color:blue', action)
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, user: action.payload };
    }
    case "GET_USER": {
      return { ...state, user: action.payload };
    }
    case "LOGOUT_USER": {
      return { ...state, user: null };
    }

    default:
      return state;
  }
}
