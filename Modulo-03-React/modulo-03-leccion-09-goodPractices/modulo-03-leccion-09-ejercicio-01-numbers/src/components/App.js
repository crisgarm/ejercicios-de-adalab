import React from "react";
import "../stylesheets/App.css";
import Numbers from "./Numbers";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Numbers />
      </div>
    );
  }
}

export default App;
