import { Provider } from 'react-redux';
import { store } from '../state/store';

import '../../styles/globals.css';
import '../../public/assets/plugins/bootstrap/css/bootstrap.min.css';
import '../../public/assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.css';
import '../../public/assets/plugins/datatables.net-bs4/css/responsive.dataTables.min.css';
import '../../public/assets/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css';
import '../../public/assets/plugins/sweetalert/sweetalert.css';
import '../../public/assets/plugins/toast-master/css/jquery.toast.css';
import '../../public/assets/plugins/select2/dist/css/select2.min.css';
import '../../public/assets/plugins/switchery/dist/switchery.min.css';
import '../../public/assets/plugins/bootstrap-select/bootstrap-select.min.css';
import '../../public/assets/plugins/multiselect/css/multi-select.css';
import '../../public/assets/plugins/bootstrap-tagsinput/dist/bootstrap-tagsinput.css';
import '../../public/assets/plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css';
import '../../public/assets/css/colors/blue.css';
import '../../public/assets/css/style.css';

import Login from './Login';
import App from './app';
const isLoggedIn = false;

function MyApp({ Component, pageProps }) {
  const baseApp = isLoggedIn ? <App Component={Component} pageprops={pageProps} /> : <Login />
  return (
    <Provider store={store}>
      {baseApp}
    </Provider>
  )
}

export default MyApp
