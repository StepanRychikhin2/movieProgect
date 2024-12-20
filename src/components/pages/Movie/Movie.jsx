import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
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
  fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${nameSerh}`,
				options)
        .then((data) => data.json())
				.then((data) => setSerhFilms(data))
}

  return (
    <>
   <input id="inputSerh" placeholder="searh">
      
      </input>
      <button onClick={(e) => seachFilm(document.getElementById("inputSerh").value)} type="button">searh</button>

<ul>
  { serhFilms && serhFilms.results ? (serhFilms.results.map((data) => {
    return (<li key={data.id}>
      <Link to="/Loadpage"><p>{data.original_title}</p></Link>
      {/* {params.data.id} */}
    </li>)
  })) : (<p>please enter the name movie...</p>)}
  {console.log(serhFilms)}
</ul>
      <Outlet />
    </>
  )
};

export default MovieSerh;