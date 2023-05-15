import logo from './assets/images/logo.svg';
import './assets/styles/App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
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
        <Button
          className="btn"
          onClick={() => alert('I am globally styled')}>
          I am button 1 - Press Me
        </Button>
      </header>
    </div>
  );
}

export default App;
