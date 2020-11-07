import React from "react";
import "../stylesheets/App.css";
import Destiny from "./Destiny";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Destiny />
      </div>
    );
  }
}

export default App;
