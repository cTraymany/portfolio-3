import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar({ location, logoColor }) {
	return (
		<nav className={"navbar__container " + (location.pathname === "/about" ? "navbar__container--about" : "navbar__container--home")}>
			<Link to="/" className="navbar__logo">
				<Logo fill={logoColor} />
			</Link>
			<ul className="navbar__menu">
				<li className="navbar__menu--item">
					<Link to="/" className="navbar__menu--link" >
						Home
					</Link>
				</li>
				<li className="navbar__menu--item">
					<Link to="/about" className="navbar__menu--link" >
						About
					</Link>
				</li>
				<li className="navbar__menu--item">
					<a href="https://docs.google.com/document/d/1TePmZMUAlMTyqBuH83UNYv3Xugh1QIF8TziIAMLBYWw/edit?usp=sharing" className="navbar__menu--link" target="blank">
						Resume
					</a>
				</li>
				<li className="navbar__menu--item">
					<a href="https://www.linkedin.com/in/chindalath/" className="navbar__menu--link" target="blank">
						LinkedIn
					</a>
				</li>
				<li className="navbar__menu--item">
					<a href="https://chindalatht.medium.com/" className="navbar__menu--link" target="blank">
						Blog
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
