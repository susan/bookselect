import { loadBooks, loadPriceFromGoogle } from "../actions/bookAction"
import { addCartItem } from '../actions/cartAction';

export const getBooks = () => {
  //console.log("in the books")
  return function thunk (dispatch) {
    return fetch("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-E-book-nonfiction.json?api-key=MCagCz4GpFDAE6G5vWxBlWgfq4Ic9NSB")
  .then(resp => resp.json())
	.then(data => {
     //console.log(data.results.books)
		dispatch(loadBooks(data.results.books))
	})
  }
}

export const getPriceFromGoogle = (book) => {
	const isbn = parseInt(book.primary_isbn13)
  console.log(isbn)
  return function thunk (dispatch) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn: ${isbn}&key=AIzaSyC1WvZbjHAPtzBuQ3U22qz4Fok3F1OiDo8`)
  .then(resp => resp.json())
	.then(data => {
     const pageCount =(data.items[0].volumeInfo.pageCount)
		dispatch(loadPriceFromGoogle(pageCount))
	})
  }
}

export const createBook = (book) => {
	console.log("thunkbook", book)
  return function thunk (dispatch) {
    return fetch(`http://localhost:3000/api/v1/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify ({
        book: {
          title: book.title,
          publisher: book.publisher,
          rank: book.rank,
          price: book.price,
          ISBN_13: book.primary_isbn13,
          author: book.author,
          image: book.book_image,
          description: book.description
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
    	console.log(data.book)
    	dispatch(addCartItem(data.book))
    })
  }
}
