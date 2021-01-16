import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  const [store] = useStoreContext();

  return (

    <nav className="navbar navbar-expand-lg mb-3">
      <div className="container">
        <Link to="/">
          <button type="button" class="navbar-brand btn btn-secondary">Home</button>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link to="/sign-in">
                <button type="button" class="btn btn-secondary">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button type="button" class="btn btn-secondary ml-2">Sign-Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
