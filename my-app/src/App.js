import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        How to input pattern:<br></br>
        - Type letter word into its respective box<br></br>
        - Put * (asterisk) for unknown letter<br></br>
      </p>
      <form action="GET" className="search-bar">
        <label for="wordPattern">Word Pattern: </label>
        <input type="text" placeholder="Search Wordle here..." name="word_pattern"></input>
      </form>
      <button className="search">Search Wordle</button>
      <p>**print input here**</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
