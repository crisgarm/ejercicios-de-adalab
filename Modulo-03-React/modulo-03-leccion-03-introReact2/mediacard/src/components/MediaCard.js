import React from "react";
import logo from "../images/cristina-garcia.jpg";

class Mediacard extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const appHeader = (
      <header className="header">
        <img src={logo} className="header__image" alt="Cristina García" />
        <div className="header-container">
          <h2 className="header-container--title">{this.props.name}</h2>
          <p className="header-container--date">{this.props.date}</p>
        </div>
      </header>
    );
    const appMain = (
      <main>
        <p className="main-content">{this.props.content}</p>
      </main>
    );
    const appFooter = (
      <footer className="footer">
        <small className="footer-content">Leer más...</small>
        <div className="footer-likes">
          <p>{this.props.likes}</p>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    );
    const appRoot = (
      <article className="items">
        {appHeader} {appMain} {appFooter}
      </article>
    );

    return appRoot;
  }
}

export default Mediacard;
