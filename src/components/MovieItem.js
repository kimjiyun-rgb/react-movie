const MovieItem = ({ movie }) => {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>평점: {movie.vote_average}</p>
      <p>개봉일: {movie.release_date}</p>
      <p>{movie.overview}</p>
    </li>
  );
};

export default MovieItem;
