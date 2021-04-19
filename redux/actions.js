export const actionTypes = {
  GET_MONTH: 'GET_MONTH',
  SET_MONTH: 'SET_MONTH',
  GET_MONTH_AMOUNT: 'GET_MONTH_AMOUNT',
  SET_MONTH_AMOUNT: 'SET_MONTH_AMOUNT',
  FAILURE: 'FAILURE',
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

export function monthAmount() {
  return { type: actionTypes.GET_MONTH_AMOUNT };
}
