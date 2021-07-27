import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const TransactionForm = (props) => {
  //Transactions need item_name, amount, date(maybe), category_id, user-id
  //dispatch state to server
  const transactionState = {
    item_name: '',
    amount: '',
    date: '',
    category_id: '',
    user_id: '',
  };

  //   const dispatch = useDispatch();

  //   const postTransaction = () => {
  //     dispatch(postTransaction(transactionState));
  //   };

  const onChangeValue = (e) => {
    console.log(changeEvent.target.value);
  };

  return (
    <form>
      <input
        type="radio"
        value={props.category}
        name="transaction"
        onChange={onChangeValue}
      />
    </form>
  );
};

export default TransactionForm;
