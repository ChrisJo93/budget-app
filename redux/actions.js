export const actionTypes = {
  //month api actions
  GET_MONTH_LIST: 'GET_MONTH_LIST',
  GET_MONTH_GOAL: 'GET_MONTH_GOAL',
  GET_MONTH_GOAL_TOTAL: 'GET_MONTH_GOAL_TOTAL',
  POST_MONTH_GOAL: 'POST_MONTH_GOAL',
  //month reducer actions
  SET_MONTH_LIST: 'SET_MONTH_LIST',
  SET_MONTH_GOAL: 'SET_MONTH_GOAL',
  SET_MONTH_GOAL_TOTAL: 'SET_MONTH_GOAL_TOTAL',

  //wallet api actions
  GET_WALLET_LIST: 'GET_WALLET_LIST',
  //wallet reducer actions
  SET_WALLET_LIST: 'SET_WALLET_LIST',

  //transaction api actions
  GET_TRANSACTION_LIST: 'GET_TRANSACTION_LIST',
  GET_TRANSACTION_BY_CATEGORY: 'GET_TRANSACTION_BY_CATEGORY',
  //transaction reducer actions
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

// ---------  month functions
export function monthList() {
  return { type: actionTypes.GET_MONTH_LIST };
}

export function monthGoal() {
  return { type: actionTypes.GET_MONTH_GOAL };
}

export function postGoal() {
  return { type: actionTypes.POST_MONTH_GOAL };
}

// ---------  wallet functions
export function walletList() {
  return { type: actionTypes.GET_WALLET_LIST };
}

// ---------  transaction functions
export function transactionList() {
  return { type: actionTypes.GET_TRANSACTION_LIST };
}

export function transactionByCategory(category) {
  return { type: actionTypes.GET_TRANSACTION_BY_CATEGORY, payload: category };
}
