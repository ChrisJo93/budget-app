import '../styles/globals.css';
import { wrapper } from 'redux/store';
import Nav from 'components/nav';
function MyApp({ Component, pageProps }) {
  <Nav />;
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
