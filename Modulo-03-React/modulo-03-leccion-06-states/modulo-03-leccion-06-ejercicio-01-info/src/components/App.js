import React from "react";
import "../stylesheets/App.css";
import Input from "./Input";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Input />
      </div>
    );
  }
}

export default App;
