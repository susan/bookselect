import { loadPriceFromGoogle } from "../actions/bookAction";
import { addCartItem, addLineItem } from "../actions/cartAction";
const GBOOKSTOKEN = `${process.env.REACT_APP_GOOGLE_TOKEN}`;

export const getPriceFromGoogle = book => {
  const isbn = parseInt(book.isbns[0].isbn13);
  return function thunk(dispatch) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn: ${isbn}&&maxResults=1&key=${GBOOKSTOKEN}`
    )
      .then(resp => resp.json())
      .then(data => {
        dispatch(loadPriceFromGoogle(data.totalItems));
      });
  };
};

export const createBook = book => {
  return function thunk(dispatch) {
    return fetch(`http://localhost:3000/api/v1/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
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
        console.log("what am i getting back when create", data);
        dispatch(addCartItem(data.book));
        dispatch(addLineItem(data.line_item));
      });
  };
};
