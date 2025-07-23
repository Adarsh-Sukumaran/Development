import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/movieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
        <div className="Favorites">
            <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
    );
  }

  <div className="favorites-empty">
    <h2>No favorites yet</h2>
    <p>Click to add the favorites</p>
  </div>;
}

export default Favorites;
