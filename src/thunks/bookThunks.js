import { loadBooks } from "../actions/bookAction"

export const getBooks = () => {
console.log("in the books")
  return function thunk (dispatch) {
    return fetch("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-E-book-nonfiction.json?api-key=MCagCz4GpFDAE6G5vWxBlWgfq4Ic9NSB")
  .then(resp => resp.json())
	.then(data => {
     console.log(data.results.books)
		dispatch(loadBooks(data.results.books))
	})
  }
}
