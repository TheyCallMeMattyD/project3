import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Login from "./components/Login";
import CreateEvent from "./pages/CreateEvent";
import SignUpForm from "./components/SignUpForm";

import Registration from "./components/Registration";

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/registration/:id" component={Registration} />
            <Route exact path="/createevent" component={CreateEvent} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route exact path="/members/:id" component={Userinfo} /> 
            <Route component={NoMatch} />
          </Switch>
          </div>
          </div>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
