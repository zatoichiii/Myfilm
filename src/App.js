import './App.css';
import Banner from './components/blocks/Banner';
import Header from './components/blocks/Header';
import NewFilms from './components/blocks/NewFilms';
import RecFilms from './components/blocks/RecFilms';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <RecFilms/>
      <NewFilms/>
    </div>
  );
}

export default App;
