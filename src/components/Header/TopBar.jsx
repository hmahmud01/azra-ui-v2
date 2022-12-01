import Link from "next/link";

function TopBar() {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    {/* <a className="navbar-brand" href="index.html">
                        <b>
                            <img src="./assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="./assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span>
                        <span className="light-logo">CNexPay</span>
                        </span> 
                    </a> */}
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
                        {/* <li className="nav-item">
                            <Link className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="/"><i className="mdi mdi-menu"></i></Link>
                            <Link className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="/"><i className="ti-menu"></i></Link>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./assets/images/users/1.jpg" alt="user" className="profile-pic user_profile_pic" /></a>
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
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/profile"><i className="ti-user"></i> My Profile</a></li>
                                    <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                    <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/auth/sign-out"><i className="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </div>
                        </li>                     */}
                        <li className="nav-item dropdown">
                            <Link href="/" legacyBehavior>
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
                                    {/* <li role="separator" className="divider"></li>
                                    <li><a href="/profile"><i className="ti-user"></i> My Profile</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/auth/sign-out"><i className="fa fa-power-off"></i> Logout</a></li> */}
                                    <li><Link href="/"><i className="fa fa-power-off"></i> Logout</Link></li>
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