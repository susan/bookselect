const initialBookState = {
  books: [],
  selectedBook: null
};

export default function bookReducer(state = initialBookState, action) {
  //console.log('%c bookReducer', 'color:orange', action)
  switch (action.type) {
    case "SELECT_BOOK": {
      return { ...state, selectedBook: action.payload };
    }
    case "GET_BOOKS": {
      return { ...state, loading: true };
    }

    case "LOAD_BOOKS": {
      return { ...state, books: action.payload };
    }

    case "LOAD_PRICE": {
      const price = action.payload;
      const newBookInfo = { ...state.selectedBook, price };
      const newBooks = state.books.map(book => {
        if (book.title === newBookInfo.title) {
          return newBookInfo;
        }
        return book;
      });
      return { ...state, books: newBooks };
    }

    default:
      return state;
  } //end of switch
} //end of export
