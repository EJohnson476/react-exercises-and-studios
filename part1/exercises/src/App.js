import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyLinks from './components/HobbyLinks.js';
import classes from './App.css'

function App() {
  return (
    <div className="App">
      <div className = {classes.similarComponents}>
      <MovieList />
      <ChoresList />
      <HobbyLinks />
      </div>
      <BookList />
    </div>
  );
}

export default App;
