export const actionTypes = {
  GET_MONTH_LIST: 'GET_MONTH_LIST',
  SET_MONTH_LIST: 'SET_MONTH_LIST',
  GET_MONTH_GOAL: 'GET_MONTH_GOAL',
  SET_MONTH_GOAL: 'SET_MONTH_GOAL',
  FAILURE: 'FAILURE',
  ERROR: 'Sorry, maybe the data sent was wrong?',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function monthList() {
  return { type: actionTypes.GET_MONTH_LIST };
}

export function monthGoal() {
  return { type: actionTypes.GET_MONTH_GOAL };
}
