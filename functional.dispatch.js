import { useDispatch } from 'react-redux';
import { month } from './redux/actions';
import { connect } from 'react-redux';

const Test = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(month())}>something</button>;
};

export default connect((state) => state)(Test);
