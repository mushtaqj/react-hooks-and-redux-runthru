import { useContext, useState } from "react";
import { MovieContext } from "../MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => setName(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const addMovie = (e) => {
    e.preventDefault();
    const newMovie = { name, price };
    setMovies([...movies, newMovie]);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setPrice(0);
  };
  return (
    <div className="create">
      <h2>Add New Movie</h2>
      <form onSubmit={addMovie}>
        <label>Movie title : </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          required
        />
        <label>Movie Price : </label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={updatePrice}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
