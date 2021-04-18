import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './actions';
import { all } from 'redux-saga/effects';

function* getMonth() {
  try {
    const response = yield axios.get('/month');
    yield put({ type: actionTypes.SET_MONTH, payload: response.data });
    console.log(response.data, 'fuck me');
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: 'Problem loading months' });
  }
}

function* monthSaga() {
  yield takeLatest(actionTypes.GET_MONTH, getMonth);
}

export default function* rootSaga() {
  yield all([monthSaga()]);
}
