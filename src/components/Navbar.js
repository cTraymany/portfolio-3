import './Navbar.css';
// useState to toggle nav icons and change icon colors
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/logo.svg';
import { ReactComponent as Menu } from '../images/menu.svg'
import { ReactComponent as Close} from '../images/close.svg'
import { ReactComponent as Logo } from '../images/logo.svg';

function Navbar() {
	const [logoColor, setLogoColor] = useState("white")

	useEffect(() => {
		// todo: color doesn't change because component is not being re-rendered.
		// component is not being re-rendered because there is no change;
		// the change is within the path, and not the component
		switch (window.location.pathname) {
			case "/about":
				setLogoColor("black")
				return logoColor
			default:
				setLogoColor("white")
				return logoColor
		}
	}, [logoColor])

	// function menuToggle() {
	// 	if menu (is active) {
	// 		show menu
	// 	}
	// 	show menu icon
	// }

	return (
		<>
			<nav className="navbar">
				<div className="navbar__container">
					{/* todo: might have to change the Link component to NavLink */}
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
		</>
	)
}

export default Navbar
