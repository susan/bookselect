import { combineReducers } from 'redux';

import bookReducer from './bookReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  book: bookReducer,
  user: userReducer,
  cart: cartReducer

})
