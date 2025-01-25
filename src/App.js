import house from './house.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={house} className="App-logo" alt="logo" />
        <p>
          Welcome to HouseFinder.io! Login to our website to find the 
          best house match for your needs.
        </p>
        <button className = "App-button" onClick={() => alert('Button clicked!')}>
          Sign In
        </button>
      </header>
    </div>
  );
}

export default App;
