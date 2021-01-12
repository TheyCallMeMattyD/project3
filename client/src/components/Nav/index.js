import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  const [store] = useStoreContext();

  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={"/"}>Home</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-in"}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Nav;
