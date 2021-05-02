import { monthList } from './redux/actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test2 extends Component {
  componentDidMount() {
    this.props.dispatch(monthList());
  }
  render() {
    return <button>Testing redux actions</button>;
  }
}
// const Test2 = () => {
//   const dispatch = useDispatch();

//   return <button onClick={() => dispatch(month())}>something</button>;
// };

// const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   await store.sagaTask.toPromise();
// });

export default connect((state) => state)(Test2);
