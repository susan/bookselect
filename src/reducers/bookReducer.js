
import books from '../data.js';


const initialBookState = {
	books: books,
	selectedBook: null,
}

 export default function BookReducer(state = initialBookState, action){
   console.log('bookReducer')
   switch (action.type){
   	 case "SELECT_BOOK": {
     return { ...state, selectedBook: action.payload}
    }
     default:
       return state;
   }
 }
