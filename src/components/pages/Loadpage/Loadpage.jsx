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
	}, [])
	console.log(movie.id)
	return movie.id ? (
		<div>
			{movie && (
				<>
				<div className={sty.boxLOad}>
					<div>
						<img
							className={sty.imgPoster}
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						></img>
					</div>
					<div>
						<h1 className={sty.titleLoad}>{movie.title}</h1>
						<p className={sty.textLload}>release date: {movie.release_date}</p>
						<p className={sty.textLload}>rating: {movie.vote_average}</p>
						<p className={sty.textLloadabout}>{movie.overview}</p>
						
					</div>
					
				</div>
				<Link to={`cast/${params.id}`}>Cast</Link>
						<Link to={`reviews/${params.id}`}>Reviews</Link>
						<Outlet />
				</>
				
			)}
		</div>
	) : (
		<div className={sty.notFoundLoadPage}>
		<h2 className={sty.notFoundLoad}>movie not found :)</h2>
		<img className={sty.notFoundLoadimg} src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg'></img>
		</div>
		
	)
}

export default MovieDetails
