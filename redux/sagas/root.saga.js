import { all } from 'redux-saga/effects';
import monthSaga from './saga';

export default function* rootSaga() {
  yield all([monthSaga()]);
}
