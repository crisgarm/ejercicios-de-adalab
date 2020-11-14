import React from "react";
import "../stylesheets/App.css";
import OnionHater from "./OnionHater";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <OnionHater />;
  }
}

export default App;
