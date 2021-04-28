import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './actions';
import { all } from 'redux-saga/effects';

function* getMonthList() {
  try {
    const response = yield axios.get('/month/month_list');
    yield put({ type: actionTypes.SET_MONTH_LIST, payload: response.data });
  } catch (err) {
    yield put({
      type: actionTypes.FAILURE,
      payload: 'Problem loading month list',
    });
  }
}

function* getMonthGoal() {
  try {
    const response = yield axios.get('/month/month_goal');
    yield put({ type: actionTypes.SET_MONTH_GOAL, payload: response.data });
  } catch (err) {
    yield put({
      type: actionTypes.FAILURE,
      payload: 'Problem loading month amounts',
    });
  }
}

function* monthSaga() {
  yield takeLatest(actionTypes.GET_MONTH_LIST, getMonthList);
  yield takeLatest(actionTypes.GET_MONTH_GOAL, getMonthGoal);
}

export default function* rootSaga() {
  yield all([monthSaga()]);
}
