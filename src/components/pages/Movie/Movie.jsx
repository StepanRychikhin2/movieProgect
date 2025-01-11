import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import sty from '../../allStyle.module.css'
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U5NjUzOTA2YmViMWZkYjJlZmMxNWQ4NGZkYjVkMCIsIm5iZiI6MTczNDA5NzAyNS45NjgsInN1YiI6IjY3NWMzODgxNGI1MjgwZmYwYzFjMDJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5yk5euBreAV-lTz-TDxrJpfqnF0YeufaoMJaGHCx-Q',
	},
}
const MovieSerh = () => {
	const [serhFilms, setSerhFilms] = useState([])
	function seachFilm(nameSerh) {
		fetch(
			`https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${nameSerh}`,
			options
		)
			.then((data) => data.json())
			.then((data) => setSerhFilms(data))
	}

	return (
		<>
			{/* <div className={sty.input__container}>
				<div className={sty.shadow__input}></div>
				<button
					className={sty.input__button__shadow}
					onClick={(e) => seachFilm(document.getElementById('inputSerh').value)}
				>
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						height="20px"
						width="20px"
					>
						<path
							d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
							fill-rule="evenodd"
							fill="#17202A"
						></path>
					</svg>
				</button>
				<input
					id="inputSerh"
					className={sty.input__search}
					type="text"
					placeholder="What do you want to search?"
				></input>
			</div> */}

			<div className={sty.inputContainerBox}>
				<div className={sty.inputContainer}>
					<input
						id="inputSerh"
						type="text"
						name="text"
						className={sty.input}
						placeholder="search..."
					/>
					<button
						onClick={(e) =>
							seachFilm(document.getElementById('inputSerh').value)
						}
						className={sty.icon}
					>
						<span>
							<svg
								width="19px"
								height="19px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{' '}
									<path
										opacity="1"
										d="M14 5H20"
										stroke="#000"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{' '}
									<path
										opacity="1"
										d="M14 8H17"
										stroke="#000"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{' '}
									<path
										d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
										stroke="#000"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{' '}
									<path
										opacity="1"
										d="M22 22L20 20"
										stroke="#000"
										stroke-width="3.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{' '}
								</g>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<ul className={sty.serhList}>
				{serhFilms && serhFilms.results ? (
					serhFilms.results.map((data) => {
						return (
							<li className={sty.serhItyem} key={data.id}>
								<Link className={sty.serhtextName} to={`/Loadpage/${data.id}`}>
								<img className={sty.serhPoster} src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}></img>
								
									<p>{data.original_title}</p>
								</Link>
								
							</li>
						)
					})
				) : (
					<></>
				)}
				{console.log(serhFilms)}
			</ul>
			<Outlet />
		</>
	)
}

export default MovieSerh
