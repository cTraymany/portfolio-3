import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [logoColor, setLogoColor] = useState("#FEFEFE")

	useEffect(() => {
		// todo: color doesn't change because component is not being re-rendered.
		// component is not being re-rendered because there is no change;
		// the change is within the path, and not the component

    // moved from nav component so I could add onchange to routes
		switch (window.location.pathname) {
			case "/about":
				setLogoColor("#636363")
				return logoColor
			default:
				setLogoColor("#FEFEFE")
				return logoColor
		}
	}, [logoColor])

  return (
    <Router>
      <Navbar logoColor={logoColor} />
      <Switch>
        <Route path="/about" exact onChange={() => console.log("hi")}>
          <About />
        </Route>
        <Route path="/" onChange={() => console.log("hi")}>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
