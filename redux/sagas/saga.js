import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions';

function* getMonth() {
  try {
    const response = yield axios.get('/month');
    yield put({ type: '' });
  }
}

function* getFood(action) {
  try {
    const response = yield axios.get(`/api/food/${action.payload}`);
    yield put({
      type: 'SET_FOOD',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with FOOD GET',
    });
  }
}

const foodReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return action.payload;
    case 'UNSET_FOOD':
      return [];
    default:
      return state;
  }
};

function* monthSaga() {
  yield takeLatest(actionTypes.MONTH, getMonth);
}
