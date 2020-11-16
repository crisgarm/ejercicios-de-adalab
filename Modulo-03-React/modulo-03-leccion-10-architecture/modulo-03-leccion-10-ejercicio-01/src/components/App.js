import React from "react";
import "../stylesheets/App.css";
import fetchPeople from "../services/PeopleService";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      info: "",
    };
  }

  getFetchPeople() {
    fetchPeople().then((data) => {
      this.setState({
        info: data,
      });
    });
  }

  render() {
    return <div className="App">Hola Cris</div>;
  }
}

export default App;
