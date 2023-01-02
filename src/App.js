import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <Dictionary word="ocean" />
      <footer>
        Coded by <a href="https://github.com/Alleviata/react-app">Yuliya</a>
      </footer>
    </div>
  );
}

export default App;
