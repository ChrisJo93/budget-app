import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions';

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
