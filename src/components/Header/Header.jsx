import Head from 'next/head';
import './header.css';

export default Header = () => {
    return(
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>NexPay | Blank</title>

            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />

            <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon.png" />

            <link href="./assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" type="text/css"
                href="./assets/plugins/datatables.net-bs4/css/dataTables.bootstrap4.css" />
            <link rel="stylesheet" type="text/css"
                href="./assets/plugins/datatables.net-bs4/css/responsive.dataTables.min.css" />
            <link href="./assets/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css"
                rel="stylesheet" />

            <link href="./assets/plugins/sweetalert/sweetalert.css" rel="stylesheet" type="text/css" />

            <link href="./assets/plugins/toast-master/css/jquery.toast.css" rel="stylesheet" />

            <link href="./assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" type="text/css" />
            <link href="./assets/plugins/switchery/dist/switchery.min.css" rel="stylesheet" />
            <link href="./assets/plugins/bootstrap-select/bootstrap-select.min.css" rel="stylesheet" />
            <link href="./assets/plugins/multiselect/css/multi-select.css" rel="stylesheet" type="text/css" />
            <link href="./assets/plugins/bootstrap-tagsinput/dist/bootstrap-tagsinput.css" rel="stylesheet" />
            <link href="./assets/plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"
                rel="stylesheet" />
            <link href="./assets/css/style.css" rel="stylesheet" />
            <link href="./assets/css/colors/blue.css" id="theme" rel="stylesheet" />
        </head>
    )
}