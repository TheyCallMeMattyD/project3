import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import {CLEARSTORAGE} from "../../utils/actions";

function Nav() {
  const [store, dispatch] = useStoreContext();
  const history = useHistory();

  function handleLogout() {
    API.logout()
    .then(res => {
      dispatch({type:CLEARSTORAGE});
    
        history.push('/login')

    })
    .catch(err => {});
  }

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
            <li>
                <button type="button" className="btn btn-secondary ml-2" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
