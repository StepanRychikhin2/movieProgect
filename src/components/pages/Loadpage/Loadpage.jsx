import React, { useEffect, useState } from 'react'
import { useParams, Outlet, Link } from 'react-router-dom'
import sty from '../../allStyle.module.css'
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}

const MovieDetails = () => {
	let params = useParams()
	console.log(params.id)
	// console.log(params)
	const [movie, setMovie] = useState([])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
			options
		)
			.then((res) => res.json())
			.then((res) => setMovie(res))
			.catch((err) => console.error(err))

		console.log(params.id)
		// console.log(movie)
		

		// console.log(moviePoster.poster_path)
	}, [])
	console.log(movie.name)
	// console.log(movie.poster_path)
	return (
		(!movie.name) ?   (<div>
			{movie && (
				<>
					<h1>{movie.title}</h1>
					<img className={sty.imgPoster}
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					></img>
					<p>{movie.overview}</p>
					<Link to={`cast/${params.id}`}>Cast</Link>
					<Link to={`reviews/${params.id}`}>Reviews</Link>
					<Outlet />
				</>
			)}
			{/* {console.log(params)} */}
			{/* {console.log( typeof movie.name)} */}
			{/* <ul>
       <li>
         <Link to="cast">Cast</Link>
       </li>
       <li>
         <Link to="reviews">Reviews</Link>
       </li>
      
     </ul>
     <Outlet /> */}
		</div>) : (<h2>ggg</h2>)
	)
}

export default MovieDetails
