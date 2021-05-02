// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';
// import { actionTypes } from '../actions';
import { all } from 'redux-saga/effects';

import monthSaga from './month';

export default function* rootSaga() {
  yield all([monthSaga()]);
}
