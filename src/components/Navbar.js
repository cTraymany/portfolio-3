import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'
import React, { useState, useEffect } from 'react';
// import { ReactComponent as Menu } from '../images/menu.svg'
// import { ReactComponent as Close} from '../images/close.svg'
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar() {
	const [logoColor, setLogoColor] = useState("#FEFEFE")
	const location = useLocation()
  
	useEffect(() => {
		switch (location.pathname) {
			case "/about":
				setLogoColor("#636363")
				return logoColor
			default:
				setLogoColor("#FEFEFE")
				return logoColor
		}
	}, [location]) // eslint-disable-line

	// function menuToggle() {
	// 	if menu (is active) {
	// 		show menu
	// 	}
	// 	show menu icon
	// }

	return (
		<nav className={"navbar " + (location.pathname === "/about" ? "navbar--about" : "navbar--home")}>
			<div className="navbar__container">
				<Link to="/" className="navbar__logo">
					<Logo fill={logoColor} />
				</Link>
				<ul className="navbar__menu">
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
			</div>
		</nav>
	)
}

export default Navbar
