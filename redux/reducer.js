import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

const reducer = (state = [], action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.FAILURE:
      return { ...state, ...{ error: action.error } };

    case actionTypes.MONTH:
      return { ...state, ...action.payload };
  }
};

export default reducer;
