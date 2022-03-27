import './App.css';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="app">
      <header className="brand">
        <img src="./img/ninja-white-trans.svg" alt="Ninja Icon" />
        <h2>Craft Beer Ninja</h2>
      </header>
      <SearchForm />
    </div>
  );
}

export default App;
