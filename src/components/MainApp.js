import { useSelector } from 'react-redux';

import Login from '../pages/Login';
import App from '../pages/app';

function MainApp({ Component, pageProps }) {
  const logState = useSelector(state => state?.auth.isLoggedin);

  const baseApp = logState ? <App Component={Component} pageProps={pageProps} /> : <Login title={"nes"} />
 
  return (
      baseApp
  )
}

export default MainApp
