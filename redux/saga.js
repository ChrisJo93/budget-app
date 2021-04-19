import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './actions';
import { all } from 'redux-saga/effects';

function* getMonth() {
  try {
    const response = yield axios.get('/month');
    yield put({ type: actionTypes.SET_MONTH, payload: response.data });
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: 'Problem loading months' });
  }
}

function* getMonthAmount() {
  try {
    const response = yield axios.get('/total');
    yield put({ type: actionTypes.SET_MONTH_AMOUNT, payload: response.data });
  } catch (err) {
    yield put({
      type: actionTypes.FAILURE,
      payload: 'Problem loading month amounts',
    });
  }
}

function* monthSaga() {
  yield takeLatest(actionTypes.GET_MONTH, getMonth);
  yield takeLatest(actionTypes.GET_MONTH_AMOUNT, getMonthAmount);
}

export default function* rootSaga() {
  yield all([monthSaga()]);
}
