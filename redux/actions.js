export const actionTypes = {
  GET_MONTH: 'GET_MONTH',
  SET_MONTH: 'SET_MONTH',
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
