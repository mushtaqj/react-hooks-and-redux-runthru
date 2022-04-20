import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: "1001",
      name: "Harry Potter",
      price: "10",
    },
    {
      id: "1002",
      name: "Lord of the Rings",
      price: "10",
    },
    {
      id: "1003",
      name: "Creed",
      price: "15",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
