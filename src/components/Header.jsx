import { Outlet, Link } from 'react-router-dom'
import sty from "./allStyle.module.css"
const Header = () => {
	return (
		<>
			<nav>
				<ul className={sty.listHeader}>
					<li>
						<Link className={sty.linkHeader} to="/">Home</Link>
					</li>
					<li>
						<Link className={sty.linkHeader} to="/Movie">Movie</Link>
					</li>

				</ul>
			</nav>

			<Outlet />
		</>
	)
}

export default Header