import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

/* To Do
 */

const initialState = {
  error: null,
  walletList: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.SET_WALLET_LIST:
      return { ...state, walletList: action.payload };

    default:
      return state;
  }
};

export default wallet;
