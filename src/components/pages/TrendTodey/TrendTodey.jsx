import { Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import logo from '../../../g0R5.gif'
import sty from '../../allStyle.module.css'

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}

const TrendToday = () => {
	const [movieTrendToday, setMovieTrendToday] = useState([])
	const [firstLoad, setFirstLoad] = useState(1)
	const [vis, setVis] = useState(false)
	const [selectedId, setSelectedId] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (firstLoad === 1) {
			setFirstLoad(10)
			fetch(
				'https://api.themoviedb.org/3/trending/all/day?language=en-US',
				options
			)
				.then((data) => data.json())
				.then((data) => setMovieTrendToday(data.results || []))
		}
	}, [firstLoad])

	const openModal = (id) => {
		setVis(true)
		setSelectedId(id)
	}

	const prevd = useCallback(
		(id) => {
			navigate(`/Loadpage/${id}`)
		},
		[navigate]
	)

	return (
		<>
			<h1 className={sty.titleTrendTodey}>Trending Today</h1>
			<ul className={sty.listTrendTodey}>
				{movieTrendToday.length ? (
					movieTrendToday.map((data) => (
						<li className={sty.cardTrenTodey} key={data.id}>
							<button
								className={sty.linkToload}
								onClick={() => openModal(data.id)}
							>
								<img
									className={sty.photoPoster}
									src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
									alt={data.title || data.name}
								/>
								<p className={sty.textPosterTrend}>{data.title || data.name}</p>
							</button>
						</li>
					))
				) : (
					<p>Loading...</p>
				)}
			</ul>

			<Outlet />

			{vis && (
				<div className={sty.overlay}>
					<div className={sty.modalBox}>
						<h2 className={sty.loadTitle}>ви хочете перейти?</h2>
						<img className={sty.loadImg} src={logo} alt="loading..." />
						<button onClick={() => prevd(selectedId)} className={sty.loadBtn}>
							Yes
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default TrendToday
