import React from "react";
import "../stylesheets/App.css";
import HalfPage from "./HalfPage";

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HalfPage>
          <h2>Right</h2>
          <p>
            Nemo dolorem doloremque eligendi neque voluptatum. Illo sed quia ea
            numquam. Quibusdam molestiae quis atque nihil. Nisi recusandae
            laudantium laborum. Tenetur ducimus rem. Consequatur eos nisi
            incidunt distinctio fugiat voluptas praesentium dolores ab.
          </p>
        </HalfPage>
        <HalfPage>
          <h2>Left</h2>
          <p>
            Nemo dolorem doloremque eligendi neque voluptatum. Illo sed quia ea
            numquam. Quibusdam molestiae quis atque nihil. Nisi recusandae
            laudantium laborum. Tenetur ducimus rem. Consequatur eos nisi
            incidunt distinctio fugiat voluptas praesentium dolores ab.
          </p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
