import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar({ location, logoColor }) {
	return (
		<nav className={"navbar " + (location.pathname === "/about" ? "navbar--about" : "navbar--home")}>
			<Link to="/" className="navbar--logo">
				<Logo fill={logoColor} />
			</Link>
			<ul className="navbar--menu">
				<li className="navbar__item">
					<Link to="/" className="navbar__link" >
						Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link to="/about" className="navbar__link" >
						About
					</Link>
				</li>
				<li className="navbar__item">
					<a href="https://docs.google.com/document/d/1TePmZMUAlMTyqBuH83UNYv3Xugh1QIF8TziIAMLBYWw/edit?usp=sharing" className="navbar__link" target="blank">
						Resume
					</a>
				</li>
				<li className="navbar__item">
					<a href="https://www.linkedin.com/in/chindalath/" className="navbar__link" target="blank">
						LinkedIn
					</a>
				</li>
				<li className="navbar__item">
					<a href="https://chindalatht.medium.com/" className="navbar__link" target="blank">
						Blog
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
