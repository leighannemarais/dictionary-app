import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://www.shecodes.io/assets/branding/logo-shecodes--summer-42902242bc561967741362fbfcacbe7750d51da501d53b0e54d6498093bd0b75.png"
            className="App-logo img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            <a href="https://github.com/leighannemarais/dictionary-app">
              Coded
            </a>{" "}
            by Leigh-Anne Marais
          </small>
        </footer>
      </div>
    </div>
  );
}
