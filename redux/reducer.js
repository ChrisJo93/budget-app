import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

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
      return { ...state, month: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  reducer,
});
