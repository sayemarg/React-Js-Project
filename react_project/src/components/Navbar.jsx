import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/layout">Layout</NavLink>
				</li>
				<li>
					<NavLink to="/table">Table</NavLink>
				</li>
				<li>
					<NavLink to="/searchbar">SearchBar</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
