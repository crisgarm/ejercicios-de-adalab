import React from "react";
import "../stylesheets/App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Pricingt from "./Pricing";
import About from "./About";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">Hola Cris</div>;
  }
}

export default App;
