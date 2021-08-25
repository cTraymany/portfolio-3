import { Link } from 'react-router-dom';

function MobileNavbar({ location }) {

    // const handleClick = (event) => {
    //     // select menu; on click of any links, set menu html to "unchecked"
    // }

    return (
        <div className={"mobile-navigation " + (location.pathname === "/about" ? "mobile-navigation--about" : "mobile-navigation--home")}>
            <input type="checkbox" className="mobile-navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="mobile-navigation__button">
                <span className="mobile-navigation__icon">&nbsp;</span>
            </label>
            <div className="mobile-navigation__background">&nbsp;</div>
            <nav className="mobile-navigation__nav">
                <ul className="mobile-navigation__list">
                    <li className="mobile-navigation__item">
                        <Link to="/" className="mobile-navigation__link">
							Home
						</Link>    
                    </li>
                    <li className="mobile-navigation__item">
                        <Link to="/about" className="mobile-navigation__link">
							About
						</Link>
                    </li>

                    <li className="mobile-navigation__item">
						<a href="https://docs.google.com/document/d/1TePmZMUAlMTyqBuH83UNYv3Xugh1QIF8TziIAMLBYWw/edit?usp=sharing" className="mobile-navigation__link" target="blank">
							Resume
						</a>
					</li>
					<li className="mobile-navigation__item">
						<a href="https://www.linkedin.com/in/chindalath/" className="mobile-navigation__link" target="blank">
							LinkedIn
						</a>
					</li>
					<li className="mobile-navigation__item">
						<a href="https://chindalatht.medium.com/" className="mobile-navigation__link" target="blank">
							Blog
						</a>
					</li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavbar