import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/Search-engine/SearchBar';
import Shortcut from './Components/Shortcuts/Shortcut';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchBar />
      <Shortcut />
      
    </div>
  );
}

export default App;
