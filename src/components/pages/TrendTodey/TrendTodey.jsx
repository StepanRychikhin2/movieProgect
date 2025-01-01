import { Outlet, Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import sty from '../../allStyle.module.css'
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}
const StyledLink = styled(NavLink)`
	color: #0073ff;
	font-family: "Roboto Mono", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size:20px;
	&.active {
		color: #005ed8;
	}
`
const TrendTodey = () => {
	let params = useParams()
	console.log(params.id)
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
			<h1 className={sty.titleTrendTodey}>Trending Today</h1>
			<ul className={sty.listTrendTodey}>
				{console.log(movieTrendTodey.results)}
				{movieTrendTodey && movieTrendTodey.results ? (
					movieTrendTodey.results.map((data) => {
						return (
							<li className={sty.cardTrenTodey} key={data.id}>
								
								<StyledLink
									className={sty.linkToload}
									to={`/Loadpage/${data.id}`}
								>
									<img
									className={sty.photoPoster}
									src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
								></img>
									<p className={sty.textPosterTrend}>
										{data.title ? data.title : data.name}
									</p>
								</StyledLink>
								{/* {params.data.id} */}
								{/* {console.log(params)} */}
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
