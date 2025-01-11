import './App.css'
import Header from './components/Header'
import { Routes, Route, Router } from 'react-router-dom'
// import MovieSerh from './components/pages/Movie/Movie'
// import TrendTodey from './components/pages/TrendTodey/TrendTodey'
// import Loadpage from './components/pages/Loadpage/Loadpage'
// import Cast from "./components/pages/Loadpage/Cast"
// import Reviews from "./components/pages/Loadpage/Reviews"
import React, { Suspense } from 'react'
const Reviews = React.lazy(() => import('./components/pages/Loadpage/Reviews'))
const Cast = React.lazy(() => import('./components/pages/Loadpage/Cast'))
const Loadpage = React.lazy(() =>
	import('./components/pages/Loadpage/Loadpage')
)
const TrendTodey = React.lazy(() =>
	import('./components/pages/TrendTodey/TrendTodey')
)
const MovieSerh = React.lazy(() => import('./components/pages/Movie/Movie.jsx'))
function App() {
	return (
		<>
			<Header></Header>
				<Suspense fallback={<div>Завантаження...</div>}>
					<Routes>
						<Route path="/" element={<TrendTodey />}></Route>
						<Route path="movie" element={<MovieSerh />} />
						<Route path="/loadpage/:id" element={<Loadpage />}>
							<Route path="cast/:id" element={<Cast />} />
							<Route path="reviews/:id" element={<Reviews />} />
						</Route>
					</Routes>
				</Suspense>
		</>
	)
}

export default App
