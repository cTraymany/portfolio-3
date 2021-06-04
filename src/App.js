import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact >
          <Home />
          <Projects />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
