import { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Navbar = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="navbar">
      <h3>Mushtaq Jameel</h3>
      <p>List of Movies : {movies.length}</p>
    </div>
  );
};

export default Navbar;
