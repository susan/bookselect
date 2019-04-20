import { loadBooks, loadPriceFromGoogle } from "../actions/bookAction"

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
	const isbn = parseInt(book.isbns[0].isbn13)
  console.log("in the google books")
  return function thunk (dispatch) {
    return fetch("https://www.googleapis.com/books/v1/volumes?q=isbn: ${isbn}&&maxResults=1&key=AIzaSyC1WvZbjHAPtzBuQ3U22qz4Fok3F1OiDo8")
  .then(resp => resp.json())
	.then(data => {
     console.log(data.totalItems)
		dispatch(loadPriceFromGoogle(data.totalItems))
	})
  }
}
