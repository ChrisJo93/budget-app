import { month } from './redux/actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test2 extends Component {
  componentDidMount() {
    console.log(this.props.dispatch(month()));
  }
  render() {
    return <button>ayo baby</button>;
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
