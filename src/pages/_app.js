import { Provider } from 'react-redux';
import { store } from '../state/store';

import { useSelector } from 'react-redux';

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

import MainApp from '../components/MainApp';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainApp Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

export default MyApp
