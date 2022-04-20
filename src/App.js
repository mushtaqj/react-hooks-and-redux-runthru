import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import MovieProvider from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <Navbar />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
