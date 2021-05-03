import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  walletList: [],
  error: null,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.GET_WALLET_LIST:
      return { ...state, walletList: action.payload };

    default:
      return state;
  }
};

export default wallet;
