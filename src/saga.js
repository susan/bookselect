import { all, call , put, takeLatest } from 'redux-saga/effects';
import { getBooks, loadBooks } from './actions/bookAction';



export default function* rootSaga() {
  yield all ([fetchItemsFromApi()]);
}
export function* fetchItemsFromApi() {
	yield takeLatest('GET_BOOKS', makeAPIRequest);
}

export function* makeAPIRequest() {
	//yield console.log("is this running")
	 try{
	   const data = yield fetch("https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-E-book-nonfiction.json?api-key=MCagCz4GpFDAE6G5vWxBlWgfq4Ic9NSB")
     .then(r => r.json());
   //console.log(data)
     yield put(loadBooks(data.results.books));
   }
   catch(error){
     console.error(error)
    }
}



