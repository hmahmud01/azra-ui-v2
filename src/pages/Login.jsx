import { useState } from 'react';


function Login () {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const userVal = () => {
        setUsername(event.target.value);
    } 

    const passVal = () => {
        setPass(event.target.value);
    }

    const submitLogin = () => {
        var data = {
            'username': username,
            'password': pass
        }
        // REDUX FUNCFION HERE 
        // OTHER FETCH STATE DATA HERE 
        console.log(data);
    }

    return (
        <section id="wrapper" className="login-register login-sidebar">
            <div className="login-box card">
                <div className="card-body">
                    <form className="floating-labels" id="frm_login" onSubmit = {submitLogin}>
                        {/* <a href="javascript:void(0)" className="text-center db"><img src="./assets/images/logo-icon.png" alt="Home" /><br/>
                            <span className="light-logo">CNexPay</span>
                        </a> */}
                        <br />
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
                                <input type="submit" value="Submit" className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" id="btn_login"/>
                            </div>
                        </div>                    
                    </form>                
                </div>
            </div>
        </section>
    )
}

export default Login;