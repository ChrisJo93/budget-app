import { combineReducers } from 'redux';
import month from './r.month';
import wallet from './r.wallet';
import transaction from './r.transaction';

export default combineReducers({
  month,
  wallet,
  transaction,
});
