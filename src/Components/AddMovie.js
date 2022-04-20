import { useContext, useState } from "react";
import { MovieContext } from "../MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => setName(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const addMovie = (e) => {
    e.preventDefault();
    const newMovie = { name, price };
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="create">
      <h2>Add New Movie</h2>
      <form onSubmit={addMovie}>
        <label>Movie title : </label>
        <input type="text" name="name" value={name} onChange={updateName} />
        <label>Movie Price : </label>
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
