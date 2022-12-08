import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../state/authActions";

import { persistor } from "../../state/store";

function TopBar() {
    const loginData = useSelector(state => state?.auth.isLoggedin);
    const dispatch = useDispatch();

    const logOut = (event) => {
        event.preventDefault();
        dispatch(dispatch(authLogout(loginData)));
        persistor.pause();
        persistor.flush().then(() => {
            return persistor.purge();
        });
    }

    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <Link className="navbar-brand" href="/">
                        <b>
                            <img src="./assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="./assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span>
                        <span className="light-logo">CNexPay</span>
                        </span>
                    </Link>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-md-0">
                        <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href=""><i className="mdi mdi-menu"></i></a> </li>
                        <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href=""><i className="ti-menu"></i></a> </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item dropdown">
                            <Link href="" legacyBehavior>
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./assets/images/users/1.jpg" alt="user" className="profile-pic user_profile_pic" /></a>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right scale-up">
                                <ul className="dropdown-user">
                                    <li>
                                        <div className="dw-user-box">
                                            <div className="u-img"><img className="user_profile_pic" src="./assets/images/users/1.jpg" alt="user" /></div>
                                            <div className="u-text">
                                                <h4 id="user_name"></h4>
                                                <p className="text-muted" id="user_email">&nbsp;</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link href="/"><i className="fa fa-power-off"></i> Logout</Link></li>
                                    <li><button className="btn btn-sm btn-block btn-danger" onClick={logOut}><i className="fa fa-power-off"></i> Logout</button></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default TopBar;