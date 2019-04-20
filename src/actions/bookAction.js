

export const selectBook = (book) => {
  return {
     type: "SELECT_BOOK",
     payload: book
  }
}

export const loadBooks = (books) => {
  return {
     type: "LOAD_BOOKS",
     payload: books
  }
}

export const loadPriceFromGoogle = (price) => {
  return {
     type: "LOAD_PRICE",
     payload: price
  }
}
