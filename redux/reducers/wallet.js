import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  walletList: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.GET_WALLET:
      return { ...state, walletList: action.payload };

    default:
      return state;
  }
};

export default wallet;
