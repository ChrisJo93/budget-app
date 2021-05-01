import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const initialState = {
  error: null,
  monthList: [],
  monthGoal: 'poop',
};

const monthReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.SET_MONTH_LIST:
      return { ...state, monthList: action.payload };

    case actionTypes.SET_MONTH_GOAL:
      return { ...state, monthGoal: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  month: monthReducer,
});
// AHHH!!
