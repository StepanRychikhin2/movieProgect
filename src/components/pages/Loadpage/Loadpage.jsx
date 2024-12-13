import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}

const MovieDetails = () => {
  // const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  let { movieId } = useParams();
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
  //   .then((response) => response.json())
  //   .then((data) => setMovie(data));
  // }, [movieId]);

  return (
    <div>
      {/* {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </>
      )} */}
      {console.log(movieId)}
      {console.log(movie)}
    </div>
  );
};

export default MovieDetails;
