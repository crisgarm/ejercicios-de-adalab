import React from "react";
import "../stylesheets/App.scss";
import MediaCard from "./MediaCard";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <MediaCard />;
  }
}
export default App;
