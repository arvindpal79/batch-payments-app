import React, { Component } from 'react';
import logo from '../../Assets/images/global-payments.svg';
import './Login.css';


const LoginComponent = () => {

  const dateObj = new Date();
  const copyrightYear = dateObj.getFullYear() +' - '+ (dateObj.getFullYear() + 1);

  return <form className="form-signin">
    <img src={logo} className="mb-4" alt="logo" />
    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label htmlFor="inputEmail" className="sr-only">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
    <label htmlFor="inputPassword" className="sr-only">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
              </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
<p className="mt-5 mb-3 text-muted">&copy; {copyrightYear}</p>
  </form>;
};
class Login extends Component {
  render() {
    return (
      <div className="text-center">
        <LoginComponent />
      </div>
    );
  }
}

export default Login;
