import ninjaLogo from './icons/ninja-white-trans.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="brand">
        <img src={ninjaLogo} alt="Ninja Icon" />
        <h2>Craft Beer Ninja</h2>
      </header>
    </div>
  );
}

export default App;
