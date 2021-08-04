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
		<nav className={"mobile__navbar " + (location.pathname === "/about" ? "mobile__navbar--about" : "mobile__navbar--home")}>
			<div className="mobile__navbar__container">
				<Link to="/" className="mobile__navbar__logo">
					<Logo fill={logoColor} />
				</Link>
                <Hamburger fill={logoColor} className={`hamburger ${!menuClass ? "active" : "inactive"}`} onClick={handleClick} />
                <Close fill={logoColor} className={`close ${!menuClass ? "inactive" : "active"}`} onClick={handleClick} />
                <div className={`mobile__menu ${!sidebarClass ? "active" : "inactive"}`} >
					<ul className="mobile__navbar__list">
						<li className="mobile__navbar__item">
							<Link to="/" className="mobile__navbar__link" >
								Home
							</Link>
						</li>
						<li className="mobile__navbar__item">
							<Link to="/about" className="mobile__navbar__link" >
								About
							</Link>
						</li>
						<li className="mobile__navbar__item">
							<a href="https://docs.google.com/document/d/1TePmZMUAlMTyqBuH83UNYv3Xugh1QIF8TziIAMLBYWw/edit?usp=sharing" className="mobile__navbar__link" target="blank">
								Resume
							</a>
						</li>
						<li className="mobile__navbar__item">
							<a href="https://www.linkedin.com/in/chindalath/" className="mobile__navbar__link" target="blank">
								LinkedIn
							</a>
						</li>
						<li className="mobile__navbar__item">
							<a href="https://chindalatht.medium.com/" className="mobile__navbar__link" target="blank">
								Blog
							</a>
						</li>
					</ul>
                </div>
			</div>
		</nav>
	)
}

export default MobileNavbar