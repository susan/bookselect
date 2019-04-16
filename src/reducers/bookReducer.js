
import books from '../data.js';


const initialBookState = {
	books: books,
	selectedBook: null,
}

 export default function bookReducer(state = initialBookState, action){
   console.log('%c bookReducer', 'color:orange', action)
   switch(action.type){
   	 case "SELECT_BOOK": {
      //console.log(action.payload)
     return { ...state, selectedBook: action.payload};
    }
     default:
       return state;
   }
 }
