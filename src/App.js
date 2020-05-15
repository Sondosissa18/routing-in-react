import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome";
import Clock from "./components/clock/clock";
import Contact from "./components/contact/contact";
import Navigation from "./components/navigation/navigation";
import NoMatch from "./components/NoMatch/NoMatch.js";

class App extends Component {
  render() {
    return (
      <div>
        {/* render the Navigation component */}
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name={"Sondos!!"} />}
          />
          <Route path="/clock" component={Clock} />
          <Route
            path="/welcome/:name"
            render={(props) => (
              <Welcome {...props} name={props.match.params.name} />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
export default App;
