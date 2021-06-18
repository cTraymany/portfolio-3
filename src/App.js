import './App.scss';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
// import Footer from './components/Footer'
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/">
          <Header />
          <Projects />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
