export const actionTypes = {
  GET_MONTH: 'GET_MONTH',
  MONTH_TOTAL: 'GET_MONTH_TOTAL',
  FAILURE: 'FAILURE',
  SET_MONTH: 'SET_MONTH',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function month() {
  return { type: actionTypes.GET_MONTH };
}

export function monthTotal() {
  return { type: actionTypes.MONTH_TOTAL };
}
