import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  error: null,
  transactionList: [],
  transactionByCategory: [],
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.SET_TRANSACTION_LIST:
      return { ...state, transactionList: action.payload };

    case actionTypes.SET_TRANSACTION_BY_CATEGORY:
      return { ...state, transactionByCategory: action.payload };
    default:
      return state;
  }
};

export default transaction;
