import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import InstrutorApp from './components/Components/Instructor/InstructorApp'
import SignUp from './components/Components/Register/SignUp'
import ClientApp from './components/Components/Client/ClientApp'

function App() {


  return (
    <Router>
      <div className="App">
        <p>Anywhere Fitness React App</p>
        <Link to="/">Home</Link>
        <Link to="/components/Components/Register/SignUp">Sign Up</Link>
        <Route path="/components/Components/Register/SignUp"><SignUp /></Route>
        <Route path="/InstructorApp"><InstrutorApp /></Route>
        <Link to="/InstructorApp">Create Workout</Link>
        <Route path="/ClientApp"><ClientApp /></Route>
        <Link to="/ClientApp">Search Classes</Link>
      </div>
    </Router>
  );
}

export default App;