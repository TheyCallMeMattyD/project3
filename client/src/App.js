import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Login from "./components/login.component";
import Users from "./components/signup.component";
import CreateEvent from "./pages/CreateEvent";

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
            <Route exact path="/" component={Login} />
            <Route exact path="/createevent" component={CreateEvent} />
            <Route exact path="/home" component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/Users" component={Users} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
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
