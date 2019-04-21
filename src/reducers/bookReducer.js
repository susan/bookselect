
const initialBookState = {
	books: [],
	selectedBook: null,
}

 export default function bookReducer(state = initialBookState, action){
   //console.log('%c bookReducer', 'color:orange', action)
   switch(action.type){

   	 case "SELECT_BOOK": {
      //console.log(action.payload)
     return { ...state, selectedBook: action.payload};
    }
     case "LOAD_BOOKS": {
       //console.log(action.payload)
     return { ...state, books: action.payload};
    }
    case "LOAD_PRICE": {
      //console.log(action.payload)
      const price = (action.payload)
      const newBookInfo ={...state.selectedBook, price}
      console.log(newBookInfo)
      console.log(state.books)
      const newBooks = state.books.map(book => {
        if (book.title === newBookInfo.title){
          return newBookInfo
        }
        return book
      })
      return{...state, books: newBooks};
    }

     default:
       return state;
   } //end of switch
 }//end of export
