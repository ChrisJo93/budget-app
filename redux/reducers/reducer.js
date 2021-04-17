import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  month: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.SET_MONTH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
