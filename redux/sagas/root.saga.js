import { all } from 'redux-saga/effects';
import monthSaga from './month.saga';

export default function* rootSaga() {
  yield all([monthSaga()]);
}
