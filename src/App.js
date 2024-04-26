import './App.css';
import Banner from './components/blocks/Banner';
import Header from './components/blocks/Header';
import NewFilms from './components/blocks/NewFilms';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <NewFilms/>
    </div>
  );
}

export default App;
