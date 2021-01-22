import React, { useRef } from "react";
import API from "../utils/API";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const handleSubmit = e => {
      e.preventDefault();

      API.authenticateMember({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
  
      emailRef.current.value = "";
      passwordRef.current.value = "";
    };  

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
}

export default Login;