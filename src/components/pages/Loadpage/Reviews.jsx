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

const Reviews = () => {
	const [movie, setMovie] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
			options
		)
			.then((response) => response.json())
			.then((data) => setMovie(data))
	}, [id])
	console.log(`rewie2ws ${id}`)
	console.log(movie)
	return (
		<div>
			<h2>REVIEWS</h2>
			<ul>
				{movie && movie.results ? (
					movie.results.map((data) => {
						return (
							<li>
								<h2>{data.author}</h2>
								<p>raiting: {data.author_details.rating}</p>
								<p>{data.content}</p>
							</li>
						)
					})
				) : (
					<p>load</p>
				)}
			</ul>
		</div>
	)
}

export default Reviews
