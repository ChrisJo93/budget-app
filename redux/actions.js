export const actionTypes = {
  //month actions
  GET_MONTH_LIST: 'GET_MONTH_LIST',
  SET_MONTH_LIST: 'SET_MONTH_LIST',
  GET_MONTH_GOAL: 'GET_MONTH_GOAL',
  SET_MONTH_GOAL: 'SET_MONTH_GOAL',

  //wallet actions
  GET_WALLET_LIST: 'GET_WALLET_LIST',
  SET_WALLET_LIST: 'SET_WALLET_LIST',

  //transaction actions
  GET_TRANSACTION_LIST: 'GET_TRANSACTION_LIST',
  GET_TRANSACTION_BY_CATEGORY: 'GET_TRANSACTION_BY_CATEGORY',
  SET_TRANSACTION_LIST: 'SET_TRANSACTION_LIST',
  SET_TRANSACTION_BY_CATEGORY: 'SET_TRANSACTION_BY_CATEGORY',

  //error/failure actions
  FAILURE: 'FAILURE',
  ERROR: 'Sorry, maybe the data sent was wrong?',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

//month calls
export function monthList() {
  return { type: actionTypes.GET_MONTH_LIST };
}

export function monthGoal() {
  return { type: actionTypes.GET_MONTH_GOAL };
}

//wallet calls
export function walletList() {
  return { type: actionTypes.GET_WALLET_LIST };
}

//transaction calls
export function transactionList() {
  return { type: actionTypes.GET_TRANSACTION_LIST };
}

export function transactionByCategory(category) {
  return { type: actionTypes.GET_TRANSACTION_BY_CATEGORY, payload: category };
}
