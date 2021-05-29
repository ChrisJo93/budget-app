import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions';

/* To Do
1. Post route function
2. Put route function
3. Delete route function
 */

function* getTransactionList() {
  try {
    const response = yield axios.get('/transaction');
    yield put({
      type: actionTypes.SET_TRANSACTION_LIST,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: actionTypes.FAILURE,
      payload: 'Problem loading transaction list',
    });
  }
}

function* getTransactionByCategory() {
  try {
    const response = yield axios.get(`/transaction/${action.payload}`);
    yield put({
      type: actionTypes.SET_TRANSACTION_BY_CATEGORY,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: actionTypes.FAILURE,
      payload: 'Problem loading transaction list',
    });
  }
}

function* TransactionSaga() {
  yield takeLatest(actionTypes.GET_TRANSACTION_LIST, getTransactionList);
  yield takeLatest(
    actionTypes.GET_TRANSACTION_BY_CATEGORY,
    getTransactionByCategory
  );
}

export default TransactionSaga;
