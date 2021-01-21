import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg mb-5 fixed-top">
      <div className="container">
        <Link to="/home">
          <button type="button" className="navbar-brand btn btn-secondary">Home</button>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link to="/login">
                <button type="button" className="btn btn-secondary">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button type="button" className="btn btn-secondary ml-2">Sign-Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
