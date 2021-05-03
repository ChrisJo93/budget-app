import { all } from 'redux-saga/effects';

import monthSaga from './s.month';
import walletSaga from './s.wallet';

export default function* rootSaga() {
  yield all([monthSaga(), walletSaga()]);
}
