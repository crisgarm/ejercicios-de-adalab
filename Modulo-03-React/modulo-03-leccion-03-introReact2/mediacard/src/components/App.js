import React from "react";
import "../stylesheets/App.scss";
import MediaList from "./MediaList";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game of Cards</h1>
        </header>
        <main>
          <MediaList />
        </main>
      </div>
    );
  }
}
export default App;
