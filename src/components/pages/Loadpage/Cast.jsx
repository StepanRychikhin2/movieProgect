import React, { useEffect, useState } from 'react'
import { useParams, Outlet, Link } from 'react-router-dom'

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}

const Cast = () => {
	// const { movieId } = useParams();
	const [movie, setMovie] = useState(null)
	const { id } = useParams()
	// useEffect(() => {
	//   fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
	//   .then((response) => response.json())
	//   .then((data) => setMovie(data));
	// }, [movieId]);
	console.log(`cast ${id}`)
	return (
		<div>
			<h2>`cast ${id}`</h2>
		</div>
	)
}

export default Cast
