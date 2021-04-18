import '../styles/globals.css';
import { wrapper } from 'redux/store';

function MyApp({ Component, pageProps }) {
  console.log(wrapper);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
