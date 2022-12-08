import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { authLogin } from '../state/authActions';

function Login ({title}) {
    const loginData = useSelector(state => state?.auth?.isLoggedin);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const userVal = () => {
        setUsername(event.target.value);
    } 

    const passVal = () => {
        setPass(event.target.value);
    }

    var data = {
        'username': username,
        'password': pass
    }

    const submitLogin = (event) => {
        event.preventDefault();
        dispatch(authLogin(data));
    }

    const buttonst = loginData ? <input type="submit" value="Submit" className="btn btn-info btn btn-block text-uppercase waves-effect waves-light" id="btn_login"/> : <input type="submit" value={loginData} className="btn btn-info btn btn-block text-uppercase waves-effect waves-light" id="btn_login"/>;


    return (
        <section id="wrapper" className="login-register login-sidebar">
            <div className="login-box card">
                <div className="card-body">
                    <form className="floating-labels" id="frm_login" onSubmit = {submitLogin}>
                        {/* <a href="javascript:void(0)" className="text-center db"><img src="./assets/images/logo-icon.png" alt="Home" /><br/>
                            <span className="light-logo">CNexPay</span>
                        </a> */}
                        <br />
                        <p>{title}</p>
                        <br />
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" onChange={userVal} required /><span className="bar"></span>
                            <label for="username">Username</label>
                        </div>
                        <div classname="form-group">
                            <input type="password" className="form-control" id="password" onChange={passVal} required /><span className="bar"></span>
                            <label for="password">Password</label>
                        </div>                
                        <div className="form-group text-center m-t-20">
                            <div className="col-xs-12">
                                {/* <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="button" id="btn_login">Log In</button> */}
                                {/* <input type="submit" value="Submit" className="btn btn-info btn btn-block text-uppercase waves-effect waves-light" id="btn_login"/> */}
                                {/* <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" ></button> */}
                                { buttonst }
                            </div>
                        </div>                    
                    </form>                
                </div>
            </div>
        </section>
    )
}

export default Login;