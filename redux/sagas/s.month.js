import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions';

/* To Do 
1. Post route function
2. Put route function
3. Delete route function
*/

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

function* postMonthGoal(action) {
  try {
    yield axios.post(
      `/month/month_goal/${action.payload.id}`,
      action.payload.year
    );
    yield put({ type: 'POST_MONTH_GOAL', payload: ac });
  } catch (err) {
    console.log('ERROR POSTING groomer:', err, action.payload.id);
  }
}

function* monthSaga() {
  yield takeLatest(actionTypes.GET_MONTH_LIST, getMonthList);
  yield takeLatest(actionTypes.GET_MONTH_GOAL, getMonthGoal);
}

export default monthSaga;
