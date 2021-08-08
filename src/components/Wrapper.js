import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'

function Wrapper() {
  return (
    <Router>
        <App />
    </Router>
  );
}

export default Wrapper;
