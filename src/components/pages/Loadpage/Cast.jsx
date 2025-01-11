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

const Cast = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState(null)

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
			options
		)
			.then((response) => response.json())
			.then((data) => setMovie(data))
	}, [id])
	console.log(`cast ${id}`)
	console.log(movie)
	return (
		<div>
			<h2>CAAST</h2>
			<ul className={sty.listCastAcrtor}>
				{movie && movie.cast ? (
					movie.cast.map((data) => {
						return (
							<li className={sty.castActor}>
								<img
									className={sty.photoCasts}
									src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
								></img>
								<p className={sty.castName}>{data.original_name}</p>
								<p className={sty.castTXT}>playning</p>
								<p className={sty.castTXT}>🔽🔽🔽🔽</p>
								<p className={sty.castCharacters}>{data.character}</p>
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

export default Cast
