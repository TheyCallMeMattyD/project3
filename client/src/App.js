import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createevent" component={CreateEvent} />
            <Route exact path="/home" component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
