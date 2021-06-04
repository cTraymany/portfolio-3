import './Navbar.css';
// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo_dark from '../images/logo_dark.png';
import menu from '../images/menu.ico'

function Navbar() {

	// function glassesToggle() {
	// 	if (route is on main page) {
	// 		the img src = "/images/logo-dark.png"
	// 	} else if (route is on about me) {
	// 		the img src = "/images/logo-light.png"
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
					<img className="menu-bar" src={menu} alt="menu bar" />
					<ul className="navbar__menu">
						<li className="navbar__item">
							<Link to="/about" className="navbar__link" >
								About
							</Link>
						</li>
						<li className="navbar__item">
							<Link to="/resume" className="navbar__link">
								Resume
							</Link>
						</li>
						<li className="navbar__item">
							{/* todo: link below will probably not be a link component since it navigates off the website */}
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
