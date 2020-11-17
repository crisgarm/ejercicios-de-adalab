import React from "react";
import "../stylesheets/App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import About from "./About";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
