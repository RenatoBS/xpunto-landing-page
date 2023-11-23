import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ background: 'black', width: '50%', height: 100, justifyContent: 'end', alignContent: 'end', flexDirection: 'row'}}>
          <p> O felipe eh programador</p>
          <p> O felipe eh programador</p>
        </div>
        <p>
          Hello <code>World</code> and Felipe
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
