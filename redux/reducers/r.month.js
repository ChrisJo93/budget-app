import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

/* To Do
 */

const initialState = {
  error: null,
  monthList: [],
  monthGoal: {},
};

const month = (state = initialState, action) => {
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

export default month;
