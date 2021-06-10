import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
