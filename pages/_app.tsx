import {GlobalStyles} from'../styles/globals'
import { Provider } from 'react-redux';
import store from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
