import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions';

function* getMonth() {
  try {
    const response = yield axios.get('/month');
    yield put({ type: actionTypes.GET_MONTH, payload: response.data });
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: 'Problem loading months' });
  }
}

function* monthSaga() {
  yield takeLatest(actionTypes.MONTH, getMonth);
}

export default monthSaga;
