import { combineReducers } from 'redux';
import month from './r.month';
import wallet from './r.wallet';

export default combineReducers({
  month,
  wallet,
});
