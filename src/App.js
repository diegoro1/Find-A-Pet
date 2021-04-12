import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'

import './Main.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Router>
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          {/* Search page */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
