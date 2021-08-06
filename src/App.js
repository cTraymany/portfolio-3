// todo: compare html elements; semantic html main & section vs divs
import './styles/App.css';
import Navbar from './components/Navbar.js';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects';
import { useLocation } from 'react-router'
import React, { useState, useEffect } from 'react';
import MobileNavbar from './components/MobileNavbar'

function App() {
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

  return (
    <div className="container">
      <Navbar location={location} logoColor={logoColor} />
      <MobileNavbar location={location} logoColor={logoColor} />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/">
          <Header />
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
