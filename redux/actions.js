export const actionTypes = {
  MONTH: 'GET_MONTH',
  MONTH_TOTAL: 'GET_MONTH_TOTAL',
  FAILURE: 'FAILURE',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function month() {
  return { type: actionTypes.MONTH };
}

export function monthTotal() {
  return { type: actionTypes.MONTH_TOTAL };
}
