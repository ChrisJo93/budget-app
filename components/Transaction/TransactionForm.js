export default TransactionForm = (props) => {
  //Transactions need item_name, amount, date(maybe), category_id, user-id
  //dispatch state to server
  const state = {
    item_name: '',
    amount: '',
    date: '',
    category_id: '',
    user_id: '',
  };

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
