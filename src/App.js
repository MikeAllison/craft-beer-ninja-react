import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResultsSection from './components/SearchResultsSection/SearchResultsSection';

function App() {
  return (
    <div className="app">
      <header className="brand">
        <img src="./img/ninja-white-trans.svg" alt="Ninja Icon" />
        <h2>Craft Beer Ninja</h2>
      </header>
      <SearchForm />
      <SearchResultsSection />
    </div>
  );
}

export default App;
