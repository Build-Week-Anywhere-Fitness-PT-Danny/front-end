import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import InstrutorApp from './components/Components/Instructor/InstructorApp'
import SignUp from './components/Components/Register/SignUp'
import ClientApp from './components/Components/Client/ClientApp'
import NavBar from './components/Components/Register/NavBar'
import ClientLogin from './components/Components/Register/clientLogin'

function App() {


  return (
    <Router>
      <div className="App" >
        <NavBar />
          <div className="homeDiv">
              <div className="linkDiv" >
                <Link to="/clientLogin" className="linkStyle">Login</Link>
              </div>
              <div className="linkDiv">
                <Link to="/components/Components/Register/SignUp" className="linkStyle">Register</Link>
              </div>
          </div>
          <Route path="/clientLogin"><ClientLogin /></Route>
          <Route path="/components/Components/Register/SignUp"><SignUp /></Route>
          <Route path="/InstructorApp"><InstrutorApp /></Route>
          <Route path="/ClientApp"><ClientApp /></Route>
      </div>
    </Router>
  );
}

export default App;