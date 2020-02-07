import { all, put, takeLatest } from "redux-saga/effects";
import { loadBooks } from "./actions/bookAction";
const NYTTOKEN = `${process.env.REACT_APP_NYT_TOKEN}`;
export default function* rootSaga() {
  yield all([fetchItemsFromApi()]);
}
export function* fetchItemsFromApi() {
  yield takeLatest("GET_BOOKS", makeAPIRequest);
}

export function* makeAPIRequest() {
  try {
    const apiData = yield fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-E-book-nonfiction.json?api-key=${NYTTOKEN}`
    );
    const data = yield apiData.json();
    yield put(loadBooks(data.results.books));
  } catch (error) {
    console.error(error);
  }
}
