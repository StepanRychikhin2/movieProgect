import { Outlet, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from "react-router";
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}

const TrendTodey = () => {
	// let params = useParams();
	const [movieTrendTodey, setMovieTrendTodey] = useState([])
	const [forstLoad, setForstLoad] = useState(1)
	useEffect(() => {
		if (forstLoad === 1) {
			setForstLoad(10)
			fetch(
				'https://api.themoviedb.org/3/trending/all/day?language=en-US',
				options
			)
				.then((data) => data.json())
				.then((data) => setMovieTrendTodey(data))
		}
	})

	return (
		<>
			<h1>Trending Todey</h1>
			<ul>
				{console.log(movieTrendTodey.results)}
				{movieTrendTodey && movieTrendTodey.results ? (
					movieTrendTodey.results.map((data) => {
						return (
							<li key={data.id}>
								<Link to="/Loadpage"><p>{data.title ? data.title : data.name}</p></Link>
								{/* {params.data.id} */}
							</li>
						)
					})
				) : (
					<p>loading...</p>
				)}
			</ul>

			<Outlet />
		</>
	)
}

export default TrendTodey
