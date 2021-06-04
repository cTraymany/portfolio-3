import './Navbar.css';
// useState to toggle nav icons and change icon colors
// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo_dark from '../images/logo_dark.png';
import menu_light from '../images/menu_light.ico'

function Navbar() {

	// function glassesToggle() {
	// 	if (route is on main page) {
	// 		the img src = menu_light
	// 	} else if (route is on about me) {
	// 		the img src = menu_dark
	// 	}
	// }

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
						<img width="40" height="40" alt="reading glasses" src={logo_dark} />
         			</Link>
					<img className="menu-bar" src={menu_light} alt="menu bar" />
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
