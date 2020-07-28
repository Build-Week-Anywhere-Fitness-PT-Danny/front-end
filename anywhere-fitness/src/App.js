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
      <div className="App">
        <p>Anywhere Fitness React App</p>
        <Route path="/components/Components/Register/SignUp"><SignUp /></Route>
        <Route path="/InstructorApp"><InstrutorApp /></Route>
        <Route path="/ClientApp"><ClientApp /></Route>
        <Route path="/clientLogin"><ClientLogin /></Route>
        <NavBar />
          <div className="homeDiv">
            <Link to="/clientLogin">Login</Link>
            <Link to="/components/Components/Register/SignUp">Sign Up</Link>
          </div>
      </div>
    </Router>
  );
}

export default App;