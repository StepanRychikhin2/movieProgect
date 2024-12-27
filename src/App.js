import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import {Routes, Route } from 'react-router-dom'
import MovieSerh from './components/pages/Movie/Movie'
import TrendTodey from './components/pages/TrendTodey/TrendTodey'
import Loadpage from './components/pages/Loadpage/Loadpage'
import Cast from "./components/pages/Loadpage/Cast"
import Reviews from "./components/pages/Loadpage/Reviews"
function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<TrendTodey />}></Route>
				<Route path="movie" element={<MovieSerh />} />
				<Route path="/loadpage/:id" element={<Loadpage />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
