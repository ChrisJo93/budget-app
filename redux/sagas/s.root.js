import { all } from 'redux-saga/effects';

import monthSaga from './s.month';
import walletSaga from './s.wallet';
import transactionSaga from './s.transaction';

export default function* rootSaga() {
  yield all([monthSaga(), walletSaga(), transactionSaga()]);
}
