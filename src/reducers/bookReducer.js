
import books from "../data.js"


const initialBookState = {
	books: books,
	selectBook: null,
}

 export default function BookReducer(state = initialBookState, action){
   console.log('bookReducer')
   switch (action.type){
     default:
       return state;
   }
 }
