import "./App.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <img src={logo} className="app-logo" alt="logo" />
          <p>Alura books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
