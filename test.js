import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import { wrapper } from 'redux/store';
import { month } from './redux/actions';

const Test = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(month())}>something</button>;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false));

  if (!store.getState().placeholderData) {
    store.dispatch(month());
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Test;
