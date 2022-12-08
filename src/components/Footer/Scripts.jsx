import Script from 'next/script';

export default function Scripts(){
    return (
        <>
            <Script src="./assets/plugins/jquery/jquery.min.js" onLoad={() => {console.log('jquery has loaded') }}/>
            <Script src="./assets/plugins/popper/popper.min.js" />
            <Script src="./assets/plugins/bootstrap/js/bootstrap.min.js" />
            <Script src="./assets/js/jquery.slimscroll.js" />
            <Script src="./assets/js/waves.js" />
            <Script src="./assets/js/sidebarmenu.js" />
            <Script src="./assets/plugins/sticky-kit-master/dist/sticky-kit.min.js" />
            <Script src="./assets/plugins/sparkline/jquery.sparkline.min.js" />
            <Script src="./assets/js/custom.min.js" />
            <Script src="./assets/plugins/moment/moment.js" />
            <Script src="./assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js" />
            <Script src="./assets/plugins/datatables.net/js/jquery.dataTables.min.js" />
            <Script src="./assets/plugins/datatables.net-bs4/js/dataTables.responsive.min.js" />
            <Script src="./assets/plugins/sweetalert/sweetalert.min.js" />
            <Script src="./assets/plugins/toast-master/js/jquery.toast.js" />
            <Script src="./assets/plugins/icheck/icheck.min.js" />
            <Script src="./assets/plugins/icheck/icheck.init.js" />
            <Script src="./assets/js/axios.min.js" />
            <Script src="./assets/plugins/switchery/dist/switchery.min.js" />
            <Script src="./assets/plugins/select2/dist/js/select2.full.min.js" />
            <Script src="./assets/plugins/bootstrap-select/bootstrap-select.min.js" />
            <Script src="./assets/plugins/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js" />
            <Script src="./assets/plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js" />
            <Script src="./assets/plugins/dff/dff.js" />
            <Script src="./assets/plugins/multiselect/js/jquery.multi-select.js" />    
            <Script src="./assets/plugins/styleswitcher/jQuery.style.switcher.js" />
        </>
    )
}