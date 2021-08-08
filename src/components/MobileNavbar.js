import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Hamburger } from '../images/menu.svg'
import { ReactComponent as Close } from '../images/close.svg'
import React, { useState } from 'react';

function MobileNavbar({ location, logoColor }) {

    const [menuClass, setMenuClass] = useState(false)
    const [sidebarClass, setSidebarClass] = useState(true)

    const handleClick = (event) => {
        setMenuClass(!menuClass)
        setSidebarClass(!sidebarClass)
        console.log(menuClass)
    }

	return (
		<nav className={"mobile-navbar__container " + (location.pathname === "/about" ? "mobile-navbar__container--about" : "mobile-navbar__container--home")}>
			<Link to="/" className="mobile-navbar__logo">
				<Logo fill={logoColor} />
			</Link>
			<Hamburger fill={logoColor} className={`mobile-navbar__button--hamburger ${!menuClass ? "active" : "inactive"}`} onClick={handleClick} />
			<Close fill={logoColor} className={`mobile-navbar__button--close ${!menuClass ? "inactive" : "active"}`} onClick={handleClick} />
			<div className={`mobile-navbar__menu ${!sidebarClass ? "active" : "inactive"}`} >
				<ul className="mobile-navbar__menu--list">
					<li className="mobile-navbar__menu--item">
						<Link to="/" className="mobile-navbar__menu--link">
							Home
						</Link>
					</li>
					<li className="mobile-navbar__menu--item">
						<Link to="/about" className="mobile-navbar__menu--link">
							About
						</Link>
					</li>
					<li className="mobile-navbar__menu--item">
						<a href="https://docs.google.com/document/d/1TePmZMUAlMTyqBuH83UNYv3Xugh1QIF8TziIAMLBYWw/edit?usp=sharing" className="mobile-navbar__menu--link" target="blank">
							Resume
						</a>
					</li>
					<li className="mobile-navbar__menu--item">
						<a href="https://www.linkedin.com/in/chindalath/" className="mobile-navbar__menu--link" target="blank">
							LinkedIn
						</a>
					</li>
					<li className="mobile-navbar__menu--item">
						<a href="https://chindalatht.medium.com/" className="mobile-navbar__menu--link" target="blank">
							Blog
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default MobileNavbar