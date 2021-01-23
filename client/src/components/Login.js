import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import {SET_CURRENT_MEMBER} from "../utils/actions";

import Jumbotron from "./Jumbotron";


function Login() {
    const [state, dispatch] = useStoreContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
  
    const handleSubmit = e => {
      e.preventDefault();

      API.authenticateMember({
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
        .then(result => {
            dispatch({
                type: SET_CURRENT_MEMBER,
                member: result.data
              });
            history.push('/home')
            
        })
        .catch(err => console.log(err));
  
      emailRef.current.value = "";
      passwordRef.current.value = "";
    };  

    return (
        <form onSubmit={handleSubmit}>
            <Jumbotron></Jumbotron>
            <h3>Log In</h3>

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
        </form>
    );
}

export default Login;