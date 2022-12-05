import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loggedStatus } from '../state/authActions';


import Login from '../pages/Login';
import App from '../pages/app';

function MainApp({ Component, pageProps }) {
  let logged = useSelector(state => state?.isLoggedIn);
  const dispatch = useDispatch();

  const logged_status = () => {
    dispatch(loggedStatus);
    // return loggedST;
  }

  useEffect(() => {
    logged_status();
  },[]) 

  console.log(logged);

  // const [logged, setLogged] = useState(false);

  // let logged = useSelector(state => state?.isLoggedIn);
  // const logged_status = useSelector(state => state?.isLoggedIn);
  // setLogged(logged_status);


  const baseApp = logged ? <App Component={Component} pageProps={pageProps} /> : <Login />
  return (
      baseApp
  )
}

export default MainApp
