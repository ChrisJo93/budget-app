import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { transactionList } from 'redux/actions';

const Transactions = (props) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(transactionList()));
  return <div> I am a transaction table lol</div>;
};

export default connect((state) => state)(Transactions);
