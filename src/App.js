import { useEffect, useState,createContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import Footer from './components/footer/Footer'

import './Main.css';

// React context for API Access Token
export const AuthContext = createContext();

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", process.env.REACT_APP_API_KEY);
      params.append("clent_secret", process.env.REACT_APP_API_SECRETE);
      fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params
        }
      )
      .then(res => res.json())
      .then(res => setAccessToken(res.access_token));
    };
    fetchAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={accessToken}>
      <div className="app">
        <Navbar />

        <Router>
          <Switch>
            <Route exact={true} path="/" component={Homepage}/>
            {/* Search page */}
          </Switch>
        </Router>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
