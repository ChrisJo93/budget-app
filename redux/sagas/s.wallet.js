import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions';

/* To Do
1. Post route function
2. Put route function
3. Delete route function
 */

function* getWalletList() {
  try {
    const response = yield axios.get('/wallet');
    yield put({ type: actionTypes.SET_WALLET_LIST, payload: response.data });
  } catch (err) {
    yield put({
      type: actionTypes.FAILURE,
      payload: 'Problem loading wallet list',
    });
  }
}

function* walletSaga() {
  yield takeLatest(actionTypes.GET_WALLET_LIST, getWalletList);
}

export default walletSaga;
