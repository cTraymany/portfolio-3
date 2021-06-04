import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      {/* todo: add footer to include email */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
