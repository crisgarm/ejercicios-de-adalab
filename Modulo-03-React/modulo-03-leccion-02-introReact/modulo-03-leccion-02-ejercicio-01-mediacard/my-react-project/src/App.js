import logo from "./cristina-garcia.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header-image" alt="Cristina García" />
        <div className="header-container">
          <h1 className="header-title">Cristina García Martín</h1>
          <p className="header-date">Domingo 01 de noviembre de 2020</p>
        </div>
      </header>
      <main>
        <p className="main-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quo
          ducimus facilis libero, natus maxime dolorem voluptatem officiis.
          Fugit laudantium sed architecto commodi eum quae maiores corrupti
          recusandae consequuntur necessitatibus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cumque dignissimos saepe molestiae
          quidem provident voluptates sunt ea natus alias rem? Perspiciatis,
          dolorem! At in omnis animi similique fugit eius doloribus.
        </p>
      </main>
      <footer className="footer">
        <small className="footer-content">Leer más...</small>
        <div className="footer-likes">
          <p>37</p>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
