const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.name} : ${movie.price}</h3>
    </div>
  );
};

export default Movie;
