import './Navbar.css';
// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo_dark from '../images/logo_dark.png';

function Navbar() {

	// function glassesToggle() {
	// 	if (route is on main page) {
	// 		the img src = "/images/logo-dark.png"
	// 	} else if (route is on about me) {
	// 		the img src = "/images/logo-light.png"
	// 	}
	// }

	return (
		<>
			<nav className="navbar">
				<div className="navbar__container">
					<Link to="/" className="navbar__logo">
						<img width="40" height="40" alt="reading glasses" src={logo_dark} />
         			</Link>
					<ul className="navbar__menu">
						<li className="navbar__item">
							<Link to="/about" className="navbar__link" />
							About
						</li>
						<li className="navbar__item">
							<Link to="/resume" className="navbar__link" />
							Resume
						</li>
						<li className="navbar__item">
							{/* link below will probably not be a link component since it navigates off the website */}
							<Link to="/blog" className="navbar__link" />
							Blog
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
