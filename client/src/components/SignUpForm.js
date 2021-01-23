import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_MEMBER, LOADING } from "../utils/actions";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";


function SignUpForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveMember({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_MEMBER,
          member: result.data
        });
      })
      .catch(err => console.log(err));

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <Jumbotron></Jumbotron>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" ref={firstNameRef} placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" ref={lastNameRef} placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" required ref={emailRef} placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" required ref={passwordRef} placeholder="Enter password" />
      </div>
     
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
      
      <p className="forgot-password text-right">
        Already registered <a href={"/login"}>sign in?</a>
      </p>
    </form>
  );
}

export default SignUpForm;