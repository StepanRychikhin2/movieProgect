import { Outlet, Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from "react-router";
import styled from "styled-components";
import sty from "../../allStyle.module.css"
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}
const StyledLink = styled(NavLink)`
 color: #003cff;

 &.active {
   color: #005ed8;
 }
`;
const TrendTodey = () => {
	let params = useParams();
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
			<h1>Trending Todey</h1>
			<ul>
				{console.log(movieTrendTodey.results)}
				{movieTrendTodey && movieTrendTodey.results ? (
					movieTrendTodey.results.map((data) => {
						return (
							<li key={data.id}>
								<StyledLink  className={sty.linkToload} to="/Loadpage/:id"><p>{data.title ? data.title : data.name}</p></StyledLink>
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
