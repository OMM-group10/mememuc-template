import logo from './logo.svg';
import './App.css';
import './editor';


function App() {
  return (
    <div className="App">
    
    <div class="navigationBar">
        <a href="#index"> Index </a>
        <a id = "editor" href ="#./editor" target = "_self"> Editor </a>
        <a href="#account"> Account </a>
        <a href="#overview"> Overview </a>
        <a href="#documentation"> Documentation </a>
    </div>

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
